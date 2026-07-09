# Hoftalon Hospital de Olhos - Site Institucional

Projeto web da LDNA S/A (Agencia Digital) para o **Hoftalon Hospital de Olhos** - hospital
oftalmologico de Londrina-PR, 33 anos de tradicao. Redesign completo do site institucional
`hoftalon.com.br`, funcional (nao apenas institucional): agendamento, resultados, fila SUS.

## Stack (fixa)

- **HTML5 + Tailwind CSS + JavaScript vanilla.** Sem frameworks, sem build tooling por padrao.
- Tailwind via CDN durante o build; migra para CSS buildado no Passo E se o budget de performance exigir.
- Multi-pagina estatico. Sem React/Vue/Next. Se algum requisito pedir stack diferente, PARE e pergunte.

## Design System

- Tokens em `design_system/tokens.json` (formato DTCG) e `design_system/tokens-studio.json` (Tokens Studio).
- `design_system/tokens.css` expoe os tokens como CSS custom properties (`var(--...)`) - **usar sempre**.
- Showcase visual: `design_system/showcase.html`.
- **Fonte canonica do visual: o Figma do cliente.** O DS local ja foi espelhado no Figma; se algo faltar
  nos tokens durante o build, alinhar contra o Figma e complementar o DS.
- **Zero magic numbers.** Todo valor visual (cor, spacing, radius, font-size) referencia um token.

### Cores da marca
| Token | Hex | Uso |
|---|---|---|
| `--brand-primary` | `#0B9ECE` | Azul-ciano do logo (cor principal) |
| `--brand-secondary` | `#0A2A4A` | Navy escuro |
| `--brand-accent` | `#0D9488` | Teal (acento) |
| `--surface-page` | `#F2F9FD` | Fundo de pagina azul-claro |

Tipografia, spacing, radius e duracoes: ver `design_system/tokens.css`.

## Estrutura do projeto

```
├── index.html              # Home
├── wireframe.html          # Wireframe low-fi (referencia de IA apenas, NAO canon visual)
├── 01-debriefing.md        # Briefing destilado (cliente, publico, dores, diferenciais)
├── 02-estrutura.md         # Sitemap + secoes por pagina
├── 03-copy.md              # Copy por secao (canonica vem do Figma por pagina)
├── css/custom.css          # CSS custom alem do Tailwind (via var(--...))
├── js/main.js              # JS vanilla (scroll-reveal, interacoes)
├── assets/
│   ├── brand/              # Logos Hoftalon
│   ├── images/             # Imagens (slides, olhos, hero candidates)
│   ├── videos/             # Videos (freepik editorial eye-exam)
│   └── icons/
├── design_system/          # tokens.json, tokens.css, showcase.html
├── refs/                   # Sites de referencia (glowdent, vaxet, vitalis)
├── docs/                   # PRD, UX-Strategy, notes, briefing/ (PDFs)
├── screenshots/            # Screenshots do build (gitignored)
└── _archive/               # Builds antigos + sobra AIOS (gitignored)
```

## Regras de conteudo (client-facing)

- PT-BR principal, com troca para EN (site bilingue por design).
- Sem em-dash (`—`) em deliverables - usar `-` ou reescrever.
- Palavras proibidas na copy: "inovador", "disruptivo", "solucoes", "bem-vindo", "estou pronto" (filler).
- Conformidade com publicidade medica (CFM) e LGPD (dados de saude sensiveis, DPO: dpo@hoftalon.com.br).
- Acessibilidade WCAG 2.1 AA como ponto de partida (e um hospital de olhos - pacientes com baixa visao).

## Referencia visual

- Principal: Hospital Israelita Albert Einstein (https://www.einstein.br/n/) - cards, hierarquia, azul dominante.
- Site atual: https://hoftalon.com.br/ | Concorrente: https://holondrina.com.br/

## Diferenciais a destacar (ativos estrategicos)

33 anos | Ranking Newsweek 2026 | Acreditacao ONA Pleno | Membro ICO | 42o mundial em catarata |
Atendimento 24h | Maior transplantador do PR | Membro WAEH | Projeto "De Olho nos Olhinhos".

## Skills que compoem o build

- `web-build` (orquestrador dos passos A-E)
- `frontend-design` + `design-taste-frontend` (Passo D - implementacao)
- `figma-to-tailwind` (slicing pixel-perfect a partir do Figma)
- `scribe` (polimento de copy)
