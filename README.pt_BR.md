<!-- l10n-sync: source-file="README.md" -->
🌐 [English](README.md) | [Español](README.es.md) | Português (Brasil) | [한국어](README.ko.md)

# 🎮 Mona Mayhem

**Workshop de VS Code e GitHub Copilot CLI** — Construa uma Arena de Batalha de Contribuições do GitHub

Um template de workshop para criar, com Astro, um site com tema de arcade retrô que compara os gráficos de contribuições do GitHub de dois usuários. Este é o **ponto de partida**: você construirá o aplicativo passo a passo com o GitHub Copilot.

![Mona Mayhem Screenshot](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)
*O que você terá construído ao final do workshop*

## 📚 Workshop

O workshop oferece duas trilhas; siga a que combina com o seu fluxo de trabalho preferido:

- **Trilha VS Code**: Chat, Plan Mode, Agent Mode, agentes em segundo plano e ciclos de revisão nativos do editor
- **Trilha CLI**: `copilot`, contexto com `@file`, `/plan`, edições autônomas, `/fleet`, `/delegate` e `/review`

| Parte | Título | Foco do Copilot |
|-------|--------|-----------------|
| [00](workshop/pt_BR/00-overview.md) | Visão Geral | Seleção de trilha e objetivos de aprendizado |
| [01](workshop/pt_BR/01-setup.md) | Configuração e Engenharia de Contexto | Instruções, permissões e configuração do ambiente |
| [02](workshop/pt_BR/02-plan-and-scaffold.md) | Planejar e Estruturar | Planejamento da API e da arquitetura de páginas |
| [03](workshop/pt_BR/03-agent-mode.md) | Construir o Jogo | Implementação agentic e iteração |
| [04](workshop/pt_BR/04-design-vibes.md) | Temas Design-First | Planejamento e implementação do design visual |
| [05](workshop/pt_BR/05-polish.md) | Polimento e Trabalho Paralelo | Paralelismo, revisões e melhorias de qualidade |
| [06](workshop/pt_BR/06-bonus.md) | Bônus e Extensões | Ideias de funcionalidades abertas e experimentos extras com o Copilot |

## 🚀 Início Rápido

1. **Crie primeiro o seu próprio repositório** de uma destas formas:
   - clicando em **Use this template** para criar um novo repositório, ou
   - fazendo um fork deste repositório.
2. Escolha o seu caminho no workshop:
   - **VS Code:** clone o seu repositório e abra-o no VS Code.
   - **GitHub Copilot CLI:** clone o seu repositório localmente, instale o `copilot` e trabalhe pelo terminal.
3. Siga o [guia do workshop](workshop/pt_BR/00-overview.md)

## Pré-requisitos

### Comuns

- GitHub Copilot (Pro, Business ou Enterprise)
- Git
- Node.js

### Trilha VS Code

- VS Code v1.107+
- Extensão do GitHub Copilot com login feito

### Trilha CLI

- GitHub Copilot CLI (`copilot`)
- Node.js 22+ se você pretende instalar o CLI com `npm install -g @github/copilot`
- Ou Homebrew / WinGet se preferir instalar com um gerenciador de pacotes nativo

## Stack Tecnológica

- **Framework**: [Astro](https://astro.build/) v6
- **Runtime**: Node.js com o adaptador [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/)
- **Fonte**: Press Start 2P (fonte de jogos retrô)
- **API**: API do gráfico de contribuições do GitHub

## Notas de Implantação

### Configuração atual do GitHub Pages

O workflow em `.github/workflows/deploy.yml` atualmente implanta no GitHub Pages o conteúdo estático do workshop e da documentação de `docs/` e `workshop/`. Ele não compila nem implanta o aplicativo Astro de `src/`.

### Se você quiser implantar o aplicativo Astro no GitHub Pages

O GitHub Pages é uma hospedagem estática, então o aplicativo Astro deve usar saída estática.

1. Altere `output` em `astro.config.mjs` de `server` para `static`.
2. Remova o adaptador do Node (`@astrojs/node`) de `astro.config.mjs` e `package.json`.
3. Atualize o workflow do GitHub Actions para executar `npm ci` e `npm run build` e depois envie `dist/` como artefato do Pages.
4. Se for implantar em uma página de projeto (`https://<user>.github.io/<repo>/`), defina `site` e `base` em `astro.config.mjs`.

Se você pretende manter as rotas de API em execução em produção, use uma plataforma de servidor em vez do GitHub Pages (por exemplo, Vercel, Netlify ou um host Node).

## Licença

MIT
