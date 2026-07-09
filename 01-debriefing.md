# 01 - Debriefing | Hoftalon Hospital de Olhos

> Destilado do `docs/PRD-Hoftalon.md` (v1.1) e `docs/UX-Strategy-Hoftalon.md`. Fonte completa nesses arquivos.

## Cliente

- **Hoftalon Hospital de Olhos** - hospital oftalmologico, Londrina-PR, 33 anos de existencia.
- Contato: Pedro Henrique (WhatsApp). Agencia: LDNA S/A. Briefing: 11/02/2026.
- Dominio: `hoftalon.com.br`. Portal transparencia: `hoftalon.org.br`.

## Objetivo

Redesign completo do site institucional, posicionando o Hoftalon como referencia nacional e
internacional em oftalmologia - profissionalismo, tradicao e inovacao. Site **funcional**, nao
so institucional: paciente agenda, consulta resultados e acompanha fila SUS.

## Publico-alvo

1. **Pacientes (primario)** - abrangente em idade e classe. SUS + Particular + Convenios.
   Buscam credibilidade e facilidade de agendamento. Muitos com baixa visao (acessibilidade critica).
2. **Comunidade cientifica internacional (secundario)** - pesquisadores; exige versao EN.
3. **Medicos e profissionais (terciario)** - encaminhadores, corpo clinico, candidatos a vagas.

## Personas-chave (UX-Strategy)

- **Maria do Carmo** - paciente SUS idosa, baixa visao, precisa de fila SUS e agendamento simples.
- Demais personas detalhadas em `docs/UX-Strategy-Hoftalon.md`.

## Dores / necessidades

- Site atual desatualizado, pouco funcional. Paciente nao consegue agendar nem ver fila online.
- Diferenciais fortes do hospital nao aparecem com destaque.
- Falta separacao clara entre Hospital (SUS + conveniado) e Clinics (particular + convenio).

## Objecoes a neutralizar

- "Sera que e confiavel?" -> selos e credenciais cedo na hierarquia (confianca progressiva).
- "Vou conseguir usar?" -> task-first: acoes principais a no maximo 2 cliques da Home.
- "Atende meu convenio / SUS?" -> clareza de convenios e caminho SUS.

## Diferenciais competitivos (destaque visual)

33 anos | Ranking Newsweek 2026 (Latin America's Top Private Hospitals) | Acreditacao ONA Pleno |
Membro do Conselho Internacional de Oftalmologia (ICO) | 42o mundial em cirurgias de catarata |
Atendimento 24h com plantao de madrugada | Um dos maiores transplantadores do PR | Membro WAEH |
Projeto social "De Olho nos Olhinhos".

## Decisoes do cliente (19/02/2026)

- Conteudo base: site atual `hoftalon.com.br`.
- Agendamento: formulario simples de solicitacao (sem integracao MV por ora).
- Portal do Paciente / Medico: **apenas front-end de login** (backend MV futuro).
- Logos de terceiros: placeholders por enquanto (alta resolucao depois).
- Idioma: PT-BR principal + botao de troca EN (site bilingue).
- Cor: azul (unica cor da marca segundo cliente).

## Tom e voz

Profissional, serio, acolhedor, confiavel. Referencia de estilo: Einstein (`einstein.br/n`).

## Restricoes / compliance

- Publicidade medica (CFM) | LGPD (dados de saude, DPO dpo@hoftalon.com.br) | WCAG 2.1 AA | VLibras.
- Performance: Lighthouse > 90 mobile e desktop.

## Assets

- **Disponiveis:** logos Hoftalon (media res), grafismos institucionais, logo "De Olho nos Olhinhos".
- **A produzir:** todo o texto, fotos profissionais, videos institucionais (cliente nao tem material).
- Mídia gerada por IA ja no projeto: videos editorial de exame + imagens de olho em `assets/`.
