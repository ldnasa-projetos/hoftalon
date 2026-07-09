# 02 - Estrutura | Hoftalon Hospital de Olhos

> Arquitetura de informacao destilada do PRD (secao 5) + UX-Strategy. O `wireframe.html` detalha
> a IA em low-fi (referencia estrutural, **nao** canon visual). Visual canonico vem do Figma.

## Sitemap

```
HOME
SOBRE NOS ......... Historia e Missao (33 anos) | Acreditacoes e Premios | Sustentabilidade |
                    Responsabilidade Social (De Olho nos Olhinhos) | Associacoes (WAEH, ICO)
SERVICOS .......... Consultas | Exames | Cirurgias | Atendimento 24h / Urgencia | Transplantes
CORPO CLINICO ..... Busca por especialidade | Perfil individual do medico
UNIDADES .......... Souza Naves (sede 24h) | Cambara | Fernando de Noronha | Rolandia |
                    Clinic Souza Naves | Clinic Hospitalar (Vila Ipiranga) | Clinic Ayrton Senna
PACIENTES ......... Portal do Paciente | Agendamento | Resultados | Fila SUS | Convenios | Preparos
PORTAL DO MEDICO .. Area restrita (front-end de login)
BLOG .............. Artigos | Noticias | Glossario da Saude Ocular
CARREIRAS ......... Vagas | Trabalhe conosco
CONTATO ........... Info por unidade | Formulario | Ouvidoria | Doacoes
ATENDIMENTO SUS ... Informacoes | Consulta de fila
[EN] .............. Versao em ingles (espelho simplificado)
```

## Faseamento (PRD secao 11)

- **Fase 1 (MVP / este build):** Home, Sobre Nos, Servicos, Unidades, Contato, Blog +
  Agendamento por formulario simples + Fila SUS + PT-BR completo + mobile-first.
- **Fase 2:** Portal do Paciente, Corpo Clinico com perfis, Glossario, EN (paginas-chave), Carreiras.
- **Fase 3:** Integracao MV, Portal do Medico, agendamento integrado.

## Secoes da HOME (ordem)

1. **Header / Nav** - logo, mega-menu, troca PT/EN, CTA agendar.
2. **Barra de acoes rapidas** - Agendar | Resultados | Fila SUS | WhatsApp (task-first, 2 cliques).
3. **Hero** - banner de alto impacto, imagem/video profissional, headline de posicionamento + CTA.
4. **Selos de credibilidade** - Newsweek, ONA, ICO, WAEH (confianca progressiva, cedo na pagina).
5. **Destaques de servicos** - cards (consultas, exames, cirurgias, 24h, transplantes).
6. **Numeros do Hoftalon** - 33 anos, cirurgias, transplantes, 42o mundial em catarata.
7. **Atendimento 24h** - destaque visual (badge/banner permanente).
8. **Unidades** - lista + mapa interativo das unidades.
9. **Depoimentos** - prova social de pacientes.
10. **Blog** - ultimos posts.
11. **CTA final de agendamento**.
12. **Footer** - contatos por unidade, ouvidoria, doacoes, LGPD, DPO, redes.

## Funcionalidades criticas (front-end nesta fase)

| # | Feature | Escopo deste build |
|---|---|---|
| F1 | Agendamento | Formulario: tipo (consulta/exame/cirurgia) + unidade + convenio/SUS + dados paciente |
| F2 | Resultados | Tela de login front-end (CPF + nascimento). Backend MV futuro |
| F3 | Fila SUS | Busca nome + CPF, exibe posicao. LGPD |
| F9 | WhatsApp | Botao flutuante + links por unidade |

## Principios de IA (UX-Strategy)

Acessibilidade como fundador | Task-first (2 cliques) | Confianca progressiva | Separacao
Hospital vs Clinic | Bilingue nativo (/en/ espelha a hierarquia) | Graceful degradation (erro/vazio/loading).
