<!-- l10n-sync: source-file="README.md" -->
🌐 [English](README.md) | Español | [Português (Brasil)](README.pt_BR.md) | [한국어](README.ko.md)

# 🎮 Mona Mayhem

**Taller de VS Code y GitHub Copilot CLI** — Construye una Arena de Batalla de Contribuciones de GitHub

Una plantilla de taller para crear con Astro un sitio web de temática arcade retro que compara los gráficos de contribuciones de GitHub de dos usuarios. Este es el **punto de partida**: construirás la aplicación paso a paso con GitHub Copilot.

![Mona Mayhem Screenshot](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)
*Lo que habrás construido al final del taller*

## 📚 Taller

El taller ofrece dos pistas; sigue la que se ajuste a tu flujo de trabajo preferido:

- **Pista VS Code**: Chat, Plan Mode, Agent Mode, agentes en segundo plano y ciclos de revisión integrados en el editor
- **Pista CLI**: `copilot`, contexto con `@file`, `/plan`, ediciones autónomas, `/fleet`, `/delegate` y `/review`

| Parte | Título | Enfoque de Copilot |
|-------|--------|--------------------|
| [00](workshop/es/00-overview.md) | Visión General | Selección de pista y objetivos de aprendizaje |
| [01](workshop/es/01-setup.md) | Configuración e Ingeniería de Contexto | Instrucciones, permisos y configuración del entorno |
| [02](workshop/es/02-plan-and-scaffold.md) | Planificar y Estructurar | Planificación de la API y de la arquitectura de páginas |
| [03](workshop/es/03-agent-mode.md) | Construir el Juego | Implementación agentic e iteración |
| [04](workshop/es/04-design-vibes.md) | Temas Design-First | Planificación e implementación del diseño visual |
| [05](workshop/es/05-polish.md) | Pulido y Trabajo Paralelo | Paralelismo, revisiones y mejoras de calidad |
| [06](workshop/es/06-bonus.md) | Bonus y Extensiones | Ideas de funcionalidades abiertas y experimentos extra con Copilot |

## 🚀 Inicio Rápido

1. **Crea primero tu propio repositorio** de una de estas formas:
   - haciendo clic en **Use this template** para crear un repositorio nuevo, o
   - haciendo un fork de este repositorio.
2. Elige tu ruta del taller:
   - **VS Code:** clona tu repositorio y ábrelo en VS Code.
   - **GitHub Copilot CLI:** clona tu repositorio en local, instala `copilot` y trabaja desde la terminal.
3. Sigue la [guía del taller](workshop/es/00-overview.md)

## Requisitos Previos

### Comunes

- GitHub Copilot (Pro, Business o Enterprise)
- Git
- Node.js

### Pista VS Code

- VS Code v1.107+
- Extensión de GitHub Copilot con sesión iniciada

### Pista CLI

- GitHub Copilot CLI (`copilot`)
- Node.js 22+ si piensas instalar el CLI con `npm install -g @github/copilot`
- O Homebrew / WinGet si prefieres instalarlo con un gestor de paquetes nativo

## Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) v6
- **Runtime**: Node.js con el adaptador [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/)
- **Fuente**: Press Start 2P (fuente de videojuegos retro)
- **API**: API del gráfico de contribuciones de GitHub

## Notas de Despliegue

### Configuración actual de GitHub Pages

El workflow de `.github/workflows/deploy.yml` despliega actualmente en GitHub Pages el contenido estático del taller y de la documentación de `docs/` y `workshop/`. No compila ni despliega la aplicación Astro de `src/`.

### Si quieres desplegar la aplicación Astro en GitHub Pages

GitHub Pages es un alojamiento estático, por lo que la aplicación Astro debe usar salida estática.

1. Cambia `output` en `astro.config.mjs` de `server` a `static`.
2. Elimina el adaptador de Node (`@astrojs/node`) de `astro.config.mjs` y `package.json`.
3. Actualiza el workflow de GitHub Actions para ejecutar `npm ci` y `npm run build`, y sube `dist/` como artefacto de Pages.
4. Si despliegas en una página de proyecto (`https://<user>.github.io/<repo>/`), define `site` y `base` en `astro.config.mjs`.

Si quieres mantener las rutas de API en ejecución en producción, usa una plataforma de servidor en lugar de GitHub Pages (por ejemplo, Vercel, Netlify o un host de Node).

## Licencia

MIT
