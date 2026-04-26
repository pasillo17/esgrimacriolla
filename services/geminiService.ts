
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
Eres el Asistente Virtual de "Buenas y Santas", una escuela de Esgrima Criolla.
Tu objetivo principal es responder preguntas frecuentes sobre las sedes, horarios, instructores y metodología de entrenamiento.
Da respuestas MUY CORTAS, claras y concisas, manteniendo un tono respetuoso y tradicionalista.

Información importante:
- Sede Central (CABA): Mitre 1851. Sábados 10:00 a 12:00. Maestro Jorge Prina.
- Sede Zona Sur (Lanús): Gym ESN, Enrique Fernandez 2066. Martes y Jueves 8:30hs, Lunes y Viernes 19:00hs. Inst. Augusto Miranda.
- Sede Belgrano: Plaza Juan Jose Paso, Moldes 1300. Jueves 19:00 a 21:00. Inst. Eliseo Dulon.
- Sede Caballito: Parque Rivadavia, CABA. Miércoles 19:00 a 20:00. Inst. Luisina Montero.
- Sede La Plata: Sindicato Gráfico. Maestro Jorge Prina.
- Sede Mar del Plata: Plaza Mitre. Miércoles 19:00hs. Inst. Sebastián Javier Chehin.
- Sede Bariloche: Bomberos voluntarios. Lunes y miércoles 18:30hs. Inst. Walter Medel e Ismael De Valle.

Ofrecemos también "Academia Online" con un Curso de Monitor de Esgrima Criolla, Clases Personalizadas Online y un Curso de Cultura Gaucha con Certificación Oficial.

MUY IMPORTANTE: Si el usuario muestra interés en una sección específica de la página (por ejemplo Clases, Sedes, Academia Online, Nosotros o Inicio), DEBES incluir un botón de navegación usando exactamente este formato: [ACTION:Texto del Boton|#id-de-seccion]
IDs de sección disponibles: #inicio, #nosotros, #clases, #sedes, #academia-online
Ejemplo 1: [ACTION:Ver Todas las Sedes|#sedes]
Ejemplo 2: [ACTION:Acceder a la Academia Online|#academia-online]
Ejemplo 3: [ACTION:Conocer Nuestras Clases|#clases]
Nunca uses markdown normal para estos links, usa solo el formato [ACTION:Texto|#id].
`;

export class HistorianService {
  private ai: GoogleGenAI | null = null;

  private getClient(): GoogleGenAI {
    if (!this.ai) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.warn("GEMINI_API_KEY is missing. AI features will not work.");
        // We can return a dummy client or throw, but let's try to proceed
        // The SDK might handle empty key gracefully until a call is made
      }
      this.ai = new GoogleGenAI({ apiKey: apiKey || '' });
    }
    return this.ai;
  }

  async askHistorian(prompt: string, history: ChatMessage[]) {
    try {
      const client = this.getClient();
      const response = await client.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            ...history.map(m => ({ role: m.role, parts: [{ text: m.content }] })),
            { role: 'user', parts: [{ text: prompt }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      return response.text || "El acero guarda silencio por ahora...";
    } catch (error) {
      console.error("Error calling Gemini:", error);
      return "Hubo una interferencia en las crónicas. Inténtalo de nuevo, forastero.";
    }
  }
}

export const historianService = new HistorianService();
