# PRD - Hoftalon Hospital de Olhos
### Product Requirements Document | LDNA S/A - Agencia Digital
**Cliente:** Hoftalon Hospital de Olhos
**Contato:** Pedro Henrique (WhatsApp)
**Data do Briefing:** 11/02/2026
**Versao do documento:** 1.1 (Atualizado com decisoes do cliente em 19/02/2026)

---

## 1. VISAO GERAL DO PROJETO

### 1.1 Resumo Executivo
Redesign completo do site institucional do Hoftalon Hospital de Olhos, hospital oftalmologico com 33 anos de existencia localizado em Londrina-PR. O novo site deve posicionar o Hoftalon como referencia nacional e internacional em oftalmologia, refletindo profissionalismo, tradicao e inovacao. O site deve ser funcional (nao apenas institucional), permitindo que pacientes realizem acoes como agendamento, consulta de resultados e acompanhamento de fila SUS.

### 1.2 Decisoes do Cliente (19/02/2026)
- **Conteudo:** Utilizar informacoes do site atual (hoftalon.com.br) como base
- **Agendamento:** Formulario simples de solicitacao de consulta (sem integracao MV por ora)
- **Portal do Paciente:** Apenas front-end de login (backend MV sera integrado futuramente)
- **Portal do Medico:** Apenas front-end de login (backend MV sera integrado futuramente)
- **Logos de terceiros:** Usar placeholders por enquanto, alta resolucao depois
- **Idioma:** PT-BR como principal, com botao de troca para EN (site completo bilíngue)

### 1.3 Referencia Principal
- **Visual e estrutural:** Hospital Israelita Albert Einstein (https://www.einstein.br/n/)
- **Site atual:** https://hoftalon.com.br/ (site institucional completo)
- **Portal transparencia:** https://www.hoftalon.org.br/
- **Dominio existente:** hoftalon.com.br

### 1.4 Concorrente Identificado
- HO Londrina (https://holondrina.com.br/)

---

## 2. OBJETIVOS DO NEGOCIO

| # | Objetivo | Prioridade | Metrica de Sucesso |
|---|----------|------------|-------------------|
| O1 | Posicionar-se como referencia em oftalmologia (Brasil e internacionalmente) | Alta | Reconhecimento de marca, trafico organico |
| O2 | Transmitir modernidade e inovacao mantendo a tradicao de 33 anos | Alta | Percepcao de marca (pesquisas) |
| O3 | Oferecer funcionalidades praticas ao paciente (agendamento, resultados, fila SUS) | Alta | Conversao de agendamentos online |
| O4 | Destacar diferenciais competitivos (ICO, Newsweek, ONA, 24h, transplantes) | Media | Tempo na pagina, engajamento |
| O5 | Atender comunidade cientifica internacional | Media | Trafico internacional, versao EN |

---

## 3. PUBLICO-ALVO

### 3.1 Publico Primario - Pacientes
- **Perfil:** Abrangente em idade e classe social
- **Necessidade:** Tratar problemas de visao (consultas, exames, cirurgias)
- **Comportamento:** Busca por credibilidade, facilidade de agendamento, informacoes sobre servicos
- **Atendimento:** SUS + Particular + Diversos Convenios

### 3.2 Publico Secundario - Comunidade Cientifica Internacional
- **Perfil:** Pesquisadores e profissionais de oftalmologia
- **Necessidade:** Informacoes institucionais, corpo clinico, participacao no ICO
- **Requisito especifico:** Versao do site em ingles

### 3.3 Publico Terciario - Medicos e Profissionais de Saude
- **Perfil:** Medicos encaminhadores, corpo clinico, candidatos a vagas
- **Necessidade:** Portal do medico, informacoes clinicas, carreiras

---

## 4. DIFERENCIAIS COMPETITIVOS A DESTACAR

Estes sao ativos estrategicos que devem ter destaque visual no site:

1. **33 anos de existencia** - Tradicao e credibilidade
2. **Ranking Newsweek 2026** - Latin America's Top Private Hospitals & Clinics (Statista)
3. **Acreditacao ONA - Acreditado Pleno** - Selo de qualidade hospitalar
4. **Conselho Internacional de Oftalmologia (ICO)** - Membro participante
5. **42a colocacao mundial em cirurgias de catarata** - Dado impactante
6. **Atendimento 24h com plantao oftalmologico de madrugada** - Diferencial raro
7. **Um dos maiores transplantadores do Parana** - Dado do relatorio de sustentabilidade
8. **Membro da WAEH** - World Association of Eye Hospitals
9. **Projeto social "De Olho nos Olhinhos"** - Parceria com Hospital do Cancer (3a edicao em 2026)

---

## 5. ARQUITETURA DE INFORMACAO

### 5.1 Mapa do Site (Proposta baseada no briefing + referencia Einstein)

```
HOFTALON.COM.BR
|
|-- HOME (Landing principal)
|
|-- SOBRE NOS
|   |-- Historia e Missao (33 anos)
|   |-- Acreditacoes e Premios (Newsweek, ONA, ICO)
|   |-- Sustentabilidade (link relatorio 2024)
|   |-- Responsabilidade Social (De Olho nos Olhinhos)
|   |-- Associacoes (WAEH, ICO)
|
|-- SERVICOS / ESPECIALIDADES
|   |-- Consultas
|   |-- Exames (lista completa)
|   |-- Cirurgias (catarata, etc.)
|   |-- Atendimento 24h / Urgencia Oftalmologica
|   |-- Transplantes
|
|-- CORPO CLINICO (Equipe Medica)
|   |-- Busca por especialidade
|   |-- Perfil individual de cada medico
|
|-- UNIDADES
|   |-- Souza Naves (Sede principal - 24h)
|   |-- Cambara
|   |-- Fernando de Noronha
|   |-- Rolandia
|   |-- Hoftalon Clinic - Souza Naves
|   |-- Hoftalon Clinic - Hospitalar (Vila Ipiranga)
|   |-- Hoftalon Clinic - Ayrton Senna
|
|-- PACIENTES
|   |-- Portal do Paciente
|   |-- Agendamento Online
|   |-- Resultados de Exames
|   |-- Posicao na Fila SUS
|   |-- Convenios Atendidos
|   |-- Preparos para Exames/Cirurgias
|
|-- PORTAL DO MEDICO
|   |-- Area restrita para corpo clinico
|
|-- BLOG / COMUNICACAO
|   |-- Artigos de saude ocular
|   |-- Noticias institucionais
|   |-- Glossario da Saude Ocular
|
|-- CARREIRAS
|   |-- Vagas disponiveis
|   |-- Trabalhe conosco
|
|-- CONTATO
|   |-- Informacoes por unidade
|   |-- Formulario de contato
|   |-- Ouvidoria
|   |-- Doacoes
|
|-- ATENDIMENTO SUS
|   |-- Informacoes
|   |-- Consulta de fila
|
|-- [EN] ENGLISH VERSION (espelho simplificado)
```

### 5.2 Paginas e Secoes Detalhadas

#### HOME
- Hero banner de alto impacto com imagem profissional
- Barra de acoes rapidas: Agendar | Resultados | Fila SUS | WhatsApp
- Selos de credibilidade (Newsweek, ONA, ICO, WAEH)
- Destaques de servicos (cards)
- Numeros do Hoftalon (33 anos, cirurgias, transplantes, etc.)
- Atendimento 24h (destaque visual)
- Unidades com mapa
- Depoimentos de pacientes
- Blog (ultimos posts)
- CTA de agendamento

#### SOBRE NOS
- Timeline historica dos 33 anos
- Missao, Visao, Valores
- Galeria de selos e premiacoes
- Video institucional (a produzir)
- Link para relatorio de sustentabilidade 2024

---

## 6. REQUISITOS FUNCIONAIS

### 6.1 Funcionalidades Essenciais (MVP)

| # | Funcionalidade | Descricao | Prioridade |
|---|---------------|-----------|------------|
| F1 | Agendamento Online | Formulario ou integracao para agendar consulta, exame ou cirurgia | P0 - Critica |
| F2 | Resultados de Exames | Area para paciente consultar resultados | P0 - Critica |
| F3 | Posicao Fila SUS | Consulta de posicao na fila de espera do SUS | P0 - Critica |
| F4 | Portal do Paciente | Area logada com historico e dados | P1 - Alta |
| F5 | Portal do Medico | Area restrita para corpo clinico | P1 - Alta |
| F6 | Blog/CMS | Sistema de publicacao de conteudo | P1 - Alta |
| F7 | Busca de medicos | Diretorio de corpo clinico com filtros | P1 - Alta |
| F8 | Formulario de contato | Por unidade e departamento | P1 - Alta |
| F9 | Integracao WhatsApp | Botao flutuante, links por unidade | P1 - Alta |
| F10 | Versao em Ingles (i18n) | Traducao do site para ingles | P2 - Media |
| F11 | Glossario de Saude | Conteudo educativo A-Z | P2 - Media |
| F12 | Integracao MV | Sistema hospitalar MV (futura) | P3 - Futura |

### 6.2 Detalhamento das Funcionalidades Criticas

#### F1 - Agendamento Online
- Selecao de tipo: Consulta / Exame / Cirurgia
- Selecao de unidade (Souza Naves, Vila Ipiranga, Ayrton Senna)
- Selecao de convenio ou particular ou SUS
- Campo para dados do paciente
- Confirmacao via e-mail/WhatsApp
- **Nota:** Verificar se integracao com MV sera necessaria ja no MVP ou se sera formulario simples com notificacao

#### F2 - Resultados de Exames
- Login por CPF + data de nascimento (ou credencial)
- Visualizacao e download de laudos em PDF
- **Nota:** Dependente da integracao com sistema interno / MV

#### F3 - Fila SUS
- Busca por nome completo + CPF (similar ao portal atual em hoftalon.org.br)
- Exibicao da posicao na fila
- Conformidade LGPD (ja implementada no portal atual)

---

## 7. REQUISITOS NAO-FUNCIONAIS

| # | Requisito | Especificacao |
|---|----------|---------------|
| NF1 | Performance | Lighthouse score > 90 (mobile e desktop) |
| NF2 | Responsividade | Mobile-first, compativel com todos os breakpoints |
| NF3 | SEO | Estrutura semantica, meta tags, schema markup (Hospital, MedicalClinic) |
| NF4 | Acessibilidade | WCAG 2.1 AA minimo, VLibras (manter) |
| NF5 | LGPD | Consentimento de cookies, politica de privacidade, DPO (dpo@hoftalon.com.br) |
| NF6 | Seguranca | HTTPS, headers de seguranca, protecao de dados sensiveis |
| NF7 | Internacionalizacao | Estrutura i18n para PT-BR e EN |
| NF8 | Publicidade Medica | Conformidade com manual de publicidade medica do CFM |
| NF9 | Uptime | 99.9% (hospital com atendimento 24h) |

---

## 8. IDENTIDADE VISUAL E DESIGN

### 8.1 Diretrizes
- **Cor primaria:** Azul (unica cor utilizada conforme cliente)
- **Identidade visual:** Ja existente (logo hospital, clinica e projetos sociais)
- **Grafismos:** Existentes e usados em pecas - devem ser incorporados ao site
- **Tom e voz:** Profissional, serio, acolhedor, confiavel
- **Estilo de referencia:** Einstein (cards, hierarquia tipografica, navegacao clara, azul como tom dominante)

### 8.2 Assets Disponiveis
- Logo Hoftalon Hospital de Olhos (em resolucao media - solicitar alta)
- Logo Hoftalon Clinic
- Grafismos institucionais
- Selo Newsweek 2026 (sem logo em alta)
- Selo ONA Acreditado Pleno (sem logo em alta)
- Logo WAEH (sem logo em alta)
- Logo "De Olho nos Olhinhos"

### 8.3 Assets a Produzir
- **Todo o conteudo textual** (o cliente nao tem textos prontos)
- **Fotos profissionais** (o cliente nao tem fotos/videos)
- **Videos institucionais**
- Conteudo para blog
- Icones de servicos e especialidades

---

## 9. INFORMACOES DE CONTATO POR UNIDADE

### Atendimento SUS
- Tel: 43 3375-9500
- E-mail: contato@hoftalon.com.br

### Doacoes
- Tel: (43) 99162-9747
- E-mail: doacoes@hoftalon.com.br

### Ouvidoria
- Tel: 43 3375-9500
- E-mail: ouvidoria@hoftalon.com.br

### Hoftalon Clinic - Souza Naves
- Rua Senador Souza Naves, 626, Centro, Londrina-PR
- Tel: (43) 3375-9595 / (43) 3375-9504
- WhatsApp: (43) 99173-5250
- Horario: Seg-Sex 8h-18h | Sab 8h-12h

### Hoftalon Clinic - Plano de Saude Hospitalar
- Rua Antonio Amado Noivo, 394, Vila Ipiranga, Londrina-PR
- Tel: 43 3375-9545 / 43 3375-9596
- WhatsApp: (43) 99919-0532

### Hoftalon Clinic - Ayrton Senna
- Av. Ayrton Senna da Silva, 900, Londrina-PR
- Tel: (43) 3375-9595 / (43) 3375-9504
- WhatsApp: (43) 99173-5250
- Horario: Seg-Sex 8h-18h | Sab 8h-12h
- Particular e Diversos Convenios

---

## 10. GAPS IDENTIFICADOS NO BRIEFING

Pontos que necessitam esclarecimento ou decisao antes/durante o desenvolvimento:

### 10.1 Gaps Criticos

| # | Gap | Impacto | Acao Sugerida |
|---|-----|---------|--------------|
| G1 | **Conteudo textual inexistente** - cliente nao tem textos prontos | Bloqueia toda a producao de conteudo | Definir se LDNA produz ou contrata redator especializado em saude. Conteudo medico exige revisao tecnica |
| G2 | **Fotos/Videos inexistentes** - nenhum material visual disponivel | Bloqueia design final | Orcamento para sessao fotografica profissional (unidades, equipe, equipamentos) + video institucional |
| G3 | **Integracao MV indefinida** - cliente diz "futuramente" | Define arquitetura do agendamento e portal | Reuniao tecnica para entender escopo da integracao MV e timeline. Definir se MVP usa formulario simples |
| G4 | **Escopo do Portal do Paciente** - nao ha detalhamento | Define complexidade tecnica | Mapear o que exatamente o paciente acessa (agendamentos, resultados, historico, docs) |
| G5 | **Escopo do Portal do Medico** - nao ha detalhamento | Define complexidade tecnica | Reuniao com equipe medica para entender necessidades |
| G6 | **Logos de terceiros em baixa resolucao** - Newsweek, ONA, WAEH | Compromete qualidade visual dos selos | Solicitar versoes em alta resolucao ou SVG diretamente das organizacoes |

### 10.2 Gaps Medios

| # | Gap | Impacto | Acao Sugerida |
|---|-----|---------|--------------|
| G7 | **Lista de convenios atendidos** nao fornecida | Pagina de convenios ficara vazia | Solicitar lista completa ao cliente |
| G8 | **Lista de exames** mencionada mas nao anexada | Pagina de servicos incompleta | Solicitar documento com lista de exames |
| G9 | **Lista de cirurgias** - cliente diz "podemos preparar" | Idem | Solicitar ou co-criar com cliente |
| G10 | **Corpo clinico** - nao ha lista de medicos | Pagina de equipe medica | Solicitar lista com nome, CRM, especialidade, foto |
| G11 | **Versao em ingles** - escopo nao definido | Pode ser site espelho completo ou simplificado | Definir quais paginas terao versao EN |
| G12 | **Paleta de cores** - cliente diz "so usamos azul" | Falta definicao de tons, secundarias, neutras | Solicitar manual de marca ou definir paleta completa com cliente |
| G13 | **Horario da unidade Vila Ipiranga** nao informado | Info incompleta na pagina de unidades | Solicitar |
| G14 | **Preparos para exames/cirurgias** - conteudo inexistente | Feature util para pacientes | Co-criar com equipe medica |

### 10.3 Gaps de Compliance

| # | Gap | Impacto | Acao Sugerida |
|---|-----|---------|--------------|
| G15 | **Manual de publicidade medica (CFM)** - mencionado mas nao detalhado | Risco legal se site violar regras | Revisar manual e criar checklist de conformidade para todo conteudo |
| G16 | **LGPD para agendamento/portal** - dados sensiveis de saude | Risco juridico | Implementar consentimento explicito, politica de privacidade, e-mail DPO |

---

## 11. RECOMENDACOES ESTRATEGICAS

### 11.1 Faseamento Sugerido

**FASE 1 - MVP (Lancamento)**
- Home, Sobre Nos, Servicos, Unidades, Contato, Blog
- Agendamento por formulario simples (sem integracao MV)
- Fila SUS (migrar portal existente)
- Versao PT-BR completa
- Mobile-first responsivo

**FASE 2 - Expansao (Pos-lancamento +2 meses)**
- Portal do Paciente (resultados de exames)
- Corpo Clinico completo com perfis
- Glossario de saude
- Versao em ingles (paginas-chave)
- Carreiras

**FASE 3 - Integracao (Pos-lancamento +4-6 meses)**
- Integracao com sistema MV
- Portal do Medico
- Agendamento integrado com sistema hospitalar
- Telemedicina (se aplicavel)

### 11.2 Recomendacoes de Design
1. Seguir o padrao Einstein: navegacao superior clean, mega-menu, cards com sombra, muito espaco branco
2. Destacar o atendimento 24h como banner fixo ou badge permanente
3. Barra de selos (Newsweek, ONA, ICO, WAEH) visivel na Home sem ser invasiva
4. Mapa interativo das 3 unidades
5. CTAs de agendamento e WhatsApp sempre visiveis

### 11.3 Recomendacoes de Conteudo
1. Contratar fotografo profissional para sessao nas 3 unidades
2. Produzir video institucional (60-90s)
3. Redator especializado em saude para textos do site (com revisao do corpo clinico)
4. Estrategia de blog com SEO focado em oftalmologia (catarata, glaucoma, miopia, etc.)

### 11.4 Recomendacoes Tecnicas
1. Framework moderno (Next.js/Astro) com SSR para SEO
2. CMS headless para gestao de conteudo pelo cliente (blog, medicos, noticias)
3. Estrutura i18n desde o dia 1 (mesmo se EN so entrar na fase 2)
4. Schema markup para Medical Organization, Hospital, Physician
5. Preparar APIs para integracao futura com MV

---

## 12. CRITERIOS DE ACEITE (DEFINITION OF DONE)

- [ ] Site responsivo funcionando em todos os breakpoints
- [ ] Score Lighthouse > 90 em todas as categorias
- [ ] Todas as paginas da Fase 1 publicadas com conteudo final
- [ ] Agendamento online funcional com notificacoes
- [ ] Fila SUS integrada e funcional
- [ ] LGPD implementada (cookies, politica, DPO)
- [ ] Conformidade com publicidade medica (CFM)
- [ ] Testes cross-browser (Chrome, Safari, Firefox, Edge)
- [ ] Dominio hoftalon.com.br apontando para novo site

---

## 13. LINKS E RECURSOS IMPORTANTES

| Recurso | URL |
|---------|-----|
| Site atual (portal transparencia) | https://www.hoftalon.org.br/ |
| Dominio principal | hoftalon.com.br |
| Referencia visual | https://www.einstein.br/n/ |
| Concorrente | https://holondrina.com.br/ |
| Relatorio Sustentabilidade 2024 | https://hoftalon.com.br/wp-content/uploads/2025/04/Relatorio-de-Sustentabilidade-2024_V4.pdf |
| ONA Acreditacao | https://www.ona.org.br/acreditacao/o-que-e-acreditacao/ |
| WAEH | https://www.waeh.org/ |
| Projeto Social | https://deolhonosolhinhos.org/ |
| DPO E-mail | dpo@hoftalon.com.br |

---

*Documento gerado em 19/02/2026 - LDNA S/A Agencia Digital*
