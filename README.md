# Buenas y Santas - Esgrima Criolla

Este repositorio contiene el código fuente de la aplicación "Buenas y Santas" sobre Esgrima Criolla, desarrollada con React, TypeScript y Vite.

## Requisitos previos

- Node.js (versión 18 o superior recomendada)
- npm o yarn

## Instalación

Instala las dependencias del proyecto:

```bash
npm install
```

## Configuración de Entorno

El proyecto requiere variables de entorno para funcionar correctamente, en especial para servicios como Gemini.
Copia el archivo `.env.example` a un nuevo archivo llamado `.env` y agrega tus credenciales:

```bash
cp .env.example .env
```

Asegúrate de no subir tu archivo `.env` al repositorio (ya está ignorado en `.gitignore`).

## Desarrollo local

Para iniciar el servidor de desarrollo local:

```bash
npm run dev
```

Esto abrirá la aplicación habitualmente en `http://localhost:3000` o `http://localhost:5173`, dependiendo de tu configuración.

## Construcción para producción

Para crear los archivos optimizados listos para su despliegue:

```bash
npm run build
```

Los archivos generados se ubicarán en la carpeta `dist`. Esta misma carpeta es la que puedes subir a **GitHub Pages**, **Vercel**, **Netlify** o cualquier otro servicio de alojamiento de sitios estáticos.

## Despliegue en GitHub Pages

Debido a que `vite.config.ts` tiene la opción `base: './'`, puedes compilar la app y subir directamente el contenido de la carpeta `dist` o configurar un flujo en GitHub Actions que publique la carpeta `dist` al branch `gh-pages` de tu repositorio.

## Contribuidores
- Este proyecto utiliza Tailwind CSS para los estilos de la interfaz.
- La animación está impulsada con `motion` y los íconos de `lucide-react`.
