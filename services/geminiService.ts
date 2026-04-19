
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
Eres el Historiador de "Buenas y Santas", una escuela de Esgrima Criolla. 
Tu conocimiento se basa en la historia de los gauchos, duelos de honor en el Río de la Plata y manuales de esgrima del siglo XIX. 
Responde con un tono solemne, respetuoso y marcial. 
Usa términos como "Facón", "Caronero", "Visteo", "Poncho". 
Tu objetivo es educar sobre la tradición y la ética del duelo criollo.
`;

export class HistorianService {
  private ai: GoogleGenAI | null = null;

  private getClient(): GoogleGenAI {
    if (!this.ai) {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        console.warn("API_KEY is missing. AI features will not work.");
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
