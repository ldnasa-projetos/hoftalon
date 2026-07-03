# UX Strategy - Hoftalon Hospital de Olhos
### Estrategia de Experiencia do Usuario | LDNA S/A
**Baseado no:** PRD-Hoftalon.md v1.1
**Data:** 19/02/2026
**Revisao:** v1.1 - Gaps preenchidos apos review UX

---

## 1. PRINCIPIOS FUNDAMENTAIS DE DESIGN

Antes de qualquer decisao de layout ou componente, estes principios guiam todo o projeto:

1. **Acessibilidade como principio fundador** - Este e um hospital de olhos. Nossos pacientes tem problemas de visao por definicao. Acessibilidade nao e um checklist no final — e o ponto de partida de cada decisao de design.
2. **Task-first** - As acoes mais frequentes (agendar, fila SUS, resultados) devem estar a no maximo 2 cliques da Home.
3. **Confianca progressiva** - Selos e credenciais aparecem cedo na hierarquia para construir confianca antes da conversao.
4. **Separacao clara Hospital vs. Clinic** - O Hospital (SUS + conveniado) e as Clinics (particular + convenio) tem publicos distintos.
5. **Bilíngue nativo** - Toda a estrutura de IA se replica em /en/ com mesma hierarquia.
6. **Graceful degradation** - Cada fluxo deve ter estados de erro, vazio e carregamento bem definidos.

---

## 2. PERSONAS

### Persona 1: Maria do Carmo (Paciente SUS - Idosa)
| Atributo | Detalhe |
|----------|---------|
| **Idade** | 68 anos |
| **Localizacao** | Londrina-PR, bairro periferico |
| **Perfil digital** | Baixo - usa WhatsApp com ajuda dos filhos, fonte grande no celular |
| **Dispositivo** | Celular Android basico (tela pequena) |
| **Necessidade primaria** | Consultar posicao na fila SUS para cirurgia de catarata |
| **Necessidade secundaria** | Agendar retorno / entender preparo para cirurgia |
| **Dor principal** | Nao consegue encontrar informacoes sobre sua fila no site atual |
| **Motivacao** | Resolver problema de visao que afeta sua independencia |
| **Cenario tipico** | O filho acessa o site pelo celular para ela, busca posicao na fila |
| **Requisito UX** | Texto grande, contraste alto, fluxo minimo de cliques, linguagem simples |

### Persona 2: Ricardo (Paciente Convenio/Particular - Adulto Ativo)
| Atributo | Detalhe |
|----------|---------|
| **Idade** | 42 anos |
| **Localizacao** | Londrina-PR, zona central |
| **Perfil digital** | Alto - usa apps bancarios, agenda tudo online |
| **Dispositivo** | iPhone 15, tambem usa notebook no trabalho |
| **Necessidade primaria** | Agendar consulta oftalmologica rapidamente |
| **Necessidade secundaria** | Verificar se seu convenio e aceito, ver resultados de exames |
| **Dor principal** | Quer resolver em poucos cliques, nao quer ligar |
| **Motivacao** | Check-up anual, pressao ocular elevada detectada |
| **Cenario tipico** | Acessa no horario do almoco pelo celular, quer agendar em < 2 minutos |
| **Requisito UX** | Agendamento rapido, confirmacao por WhatsApp, portal de resultados |

### Persona 3: Ana Beatriz (Mae - Paciente Pediatrico)
| Atributo | Detalhe |
|----------|---------|
| **Idade** | 34 anos |
| **Localizacao** | Londrina-PR |
| **Perfil digital** | Medio-alto - pesquisa muito no Google antes de escolher |
| **Dispositivo** | Celular Android e computador |
| **Necessidade primaria** | Encontrar especialista pediatrico para o filho de 6 anos |
| **Necessidade secundaria** | Entender quais exames a crianca precisa fazer, localizacao da unidade |
| **Dor principal** | Precisa de credibilidade para confiar a saude do filho |
| **Motivacao** | Professora da escola indicou que a crianca pode ter miopia |
| **Cenario tipico** | Pesquisa "oftalmologista infantil Londrina" no Google, chega pela busca organica |
| **Requisito UX** | SEO forte, info sobre corpo clinico, credenciais visiveis, facilidade de contato |

### Persona 4: Dr. James Carter (Pesquisador Internacional)
| Atributo | Detalhe |
|----------|---------|
| **Idade** | 51 anos |
| **Localizacao** | Boston, EUA |
| **Perfil digital** | Alto - ambiente academico |
| **Dispositivo** | MacBook Pro |
| **Necessidade primaria** | Informacoes institucionais em ingles sobre o Hoftalon para parceria ICO |
| **Necessidade secundaria** | Dados de volume cirurgico, corpo clinico, publicacoes |
| **Dor principal** | Nao consegue navegar o site em portugues |
| **Motivacao** | Avaliando hospitais para colaboracao em pesquisa de catarata |
| **Cenario tipico** | Recebeu indicacao no congresso ICO, acessa o site pelo desktop |
| **Requisito UX** | Versao em ingles acessivel com 1 clique, dados institucionais claros |

### Persona 5: Dr. Paulo (Medico do Corpo Clinico)
| Atributo | Detalhe |
|----------|---------|
| **Idade** | 45 anos |
| **Localizacao** | Londrina-PR |
| **Perfil digital** | Alto |
| **Dispositivo** | Celular e computador |
| **Necessidade primaria** | Acessar portal do medico (login) |
| **Necessidade secundaria** | Verificar sua pagina no corpo clinico, carreiras |
| **Dor principal** | Precisa de acesso rapido ao portal sem navegar todo o site |
| **Motivacao** | Rotina diaria de atendimento |
| **Cenario tipico** | Acessa pela manha antes de iniciar atendimentos |
| **Requisito UX** | Login rapido no header, acesso direto sem friccao |

### Persona 6: Dra. Fernanda (Medica Encaminhadora Externa)
| Atributo | Detalhe |
|----------|---------|
| **Idade** | 38 anos |
| **Localizacao** | Cambe-PR (cidade vizinha a Londrina) |
| **Perfil digital** | Alto |
| **Dispositivo** | Celular e computador do consultorio |
| **Necessidade primaria** | Encaminhar pacientes para especialidades/cirurgias que nao realiza |
| **Necessidade secundaria** | Verificar quais especialidades e exames o Hoftalon oferece, corpo clinico |
| **Dor principal** | Precisa confirmar rapidamente se o Hoftalon atende o caso antes de encaminhar |
| **Motivacao** | Paciente com suspeita de glaucoma precisa de exame de campo visual e acompanhamento especializado |
| **Cenario tipico** | Durante consulta, acessa o site pelo celular para verificar se Hoftalon faz o exame e quem e o especialista, para referenciar o paciente |
| **Requisito UX** | Listagem clara de servicos/exames, corpo clinico filtravel por especialidade, contato direto para encaminhamento |

---

## 3. JORNADAS DO USUARIO

### Jornada 1: Agendar Consulta (Ricardo - Convenio)
```
[Google/Acesso Direto]
        |
        v
   [HOME] ──> Ve barra de acoes rapidas
        |
        v
   [CTA "Agendar Consulta"] ──> Clique direto
        |
        v
   [Formulario de Agendamento]
   - Seleciona tipo: Consulta
   - Seleciona especialidade
   - Seleciona unidade (com horarios visiveis)
   - Seleciona convenio (dropdown com busca)
   - Preenche dados pessoais (nome, CPF, telefone)
   - Seleciona data/periodo preferido
        |
        v
   [Estado: Carregando] ──> Spinner + "Enviando sua solicitacao..."
        |
        v
   [SUCESSO: Pagina de Confirmacao]
   - Icone de check verde
   - "Solicitacao recebida com sucesso!"
   - Numero de protocolo: #HOFT-2026XXXX
   - "Entraremos em contato em ate 24h uteis via WhatsApp"
   - Resumo do pedido (tipo, unidade, convenio)
   - Botoes: "Voltar ao inicio" | "Salvar comprovante (PDF)"
   + Notificacao WhatsApp automatica

   OU (em caso de erro)

   [ERRO: Inline no formulario]
   - Mensagem vermelha acima do botao
   - "Nao foi possivel enviar sua solicitacao. Tente novamente."
   - Se persistir: "Ligue para (43) 3375-9500 ou envie WhatsApp"
   - Campos com erro destacados em vermelho com mensagem especifica
```
**Metricas UX:**
- Tempo ate completar: < 2 minutos
- Cliques ate formulario: maximo 2 (Home > CTA)
- Taxa de abandono alvo: < 30%

---

### Jornada 2: Consultar Fila SUS (Maria do Carmo)
```
[HOME] ──> Botao de destaque "Fila SUS" na barra rapida
        |
        v
   [Pagina Fila SUS]
   - Campo: Nome Completo
   - Campo: CPF (com mascara automatica)
   - Botao: "Consultar Posicao"
        |
        v
   [Estado: Carregando] ──> Spinner + "Consultando sua posicao..."
        |
        v
   [SUCESSO: Resultado]
   - Posicao na fila (numero grande, destaque visual)
   - Tipo de procedimento
   - Data de entrada na fila
   - Informacoes LGPD visiveis
   - Botao: "Imprimir resultado"

   OU

   [VAZIO: Nao encontrado]
   - Icone ilustrativo (nao apenas texto)
   - "Nao encontramos seu registro na fila."
   - "Isso pode significar que:"
   -   "Seu cadastro ainda nao foi processado"
   -   "Os dados informados estao diferentes do cadastro"
   - "Verifique se digitou nome e CPF corretamente"
   - Botao: "Tentar novamente"
   - Separador
   - "Precisa de ajuda? Fale com nosso atendimento SUS:"
   - Telefone clicavel: (43) 3375-9500
   - WhatsApp clicavel

   OU

   [ERRO: Falha tecnica]
   - "Sistema temporariamente indisponivel."
   - "Por favor, tente novamente em alguns minutos"
   - "Ou entre em contato diretamente:"
   - Telefone clicavel + WhatsApp
```
**Metricas UX:**
- Cliques ate resultado: maximo 3 (Home > Fila SUS > Consultar)
- Fonte minima no resultado: 18px
- Botao de contato sempre visivel no fluxo de erro

---

### Jornada 3: Pesquisa Organica - Primeiro Contato (Ana Beatriz)
```
[Google: "oftalmologista infantil Londrina"]
        |
        v
   [Pagina de Servico Individual] (SEO landing)
   ex: /servicos/consultas/oftalmologia-pediatrica/
   - Titulo H1 otimizado para SEO
   - Descricao da especialidade
   - Corpo clinico que atende esta especialidade
   - Selos de credibilidade
   - FAQ sobre o tema (schema markup)
   - CTA: Agendar | WhatsApp | Ligar
        |
        v
   [Decide agendar] ──> Formulario de agendamento
                          (pre-seleciona especialidade)

   OU

   [Quer saber mais] ──> Sobre Nos / Corpo Clinico
   - Ve credenciais (ONA, Newsweek, ICO)
   - Ve perfis dos medicos
   - Convence-se da credibilidade
        |
        v
   [Agenda consulta com confianca]
```

---

### Jornada 4: Acesso Internacional (Dr. James Carter)
```
[Acesso direto ao site]
        |
        v
   [HOME PT-BR] ──> Botao idioma "EN" no header (globe icon + texto)
        |
        v
   [HOME EN] ──> Versao traduzida completa
   - About Us / History
   - Medical Staff
   - Accreditations (Newsweek, ONA, ICO, WAEH)
   - Contact
        |
        v
   [About Us EN]
   - Institutional data
   - Surgical volumes
   - Research partnerships
   - ICO membership details
```

---

### Jornada 5: Portal do Paciente (Login Front-end)
```
[HOME] ──> "Portal do Paciente" no header
        |
        v
   [Pagina de Login]
   - Campo: CPF (com mascara)
   - Campo: Senha
   - Link: "Esqueci minha senha"
   - Link: "Primeiro acesso"
   - Botao: "Entrar"
        |
        v
   [Tela pos-login] (front-end only / placeholder)
   - Headline: "Seu portal esta sendo preparado"
   - Texto: "Em breve voce podera consultar resultados
     de exames e historico de atendimentos por aqui."
   - Separador
   - "Enquanto isso, voce pode:"
   - [icon] Consultar resultados de exames pelo telefone:
           (43) 3375-9500
   - [icon] Enviar mensagem pelo WhatsApp:
           (43) 99173-5250
   - [icon] Agendar sua proxima consulta:
           [Botao: Agendar Consulta]
   - Rodape: "Previsao de lancamento: em breve.
              Voce sera notificado por e-mail."
```

---

### Jornada 6: Portal do Medico (Login Front-end)
```
[HOME] ──> "Portal do Medico" no header (utility nav)
        |
        v
   [Pagina de Login Medico]
   - Campo: CRM ou E-mail
   - Campo: Senha
   - Link: "Esqueci minha senha"
   - Botao: "Entrar"
        |
        v
   [Tela pos-login] (front-end only / placeholder)
   - Headline: "Portal do Corpo Clinico"
   - Texto: "O acesso integrado ao sistema MV esta
     sendo implementado."
   - Separador
   - "Para acesso ao sistema atual, utilize:"
   - [icon] MV PEP: [link para sistema atual se houver]
   - [icon] Suporte TI: (43) XXXX-XXXX
   - [icon] E-mail: ti@hoftalon.com.br
   - Rodape: "Previsao de integracao: a definir."
```

---

### Jornada 7: Encaminhamento Medico (Dra. Fernanda)
```
[Google: "hoftalon exames" / Acesso direto]
        |
        v
   [HOME ou /servicos/]
        |
        v
   [Pagina de Exames] ──> Lista completa filtravel
   - Filtra por tipo de exame
   - Encontra "Campo Visual Computadorizado"
        |
        v
   [Pagina do Exame Individual]
   - Descricao tecnica do exame
   - Preparo necessario
   - Unidades que realizam
   - Medicos especialistas
        |
        v
   [Corpo Clinico] ──> Filtra por "Glaucoma"
   - Ve especialistas disponiveis
   - Ve CRM e credenciais
        |
        v
   [Contato direto]
   - WhatsApp da unidade para encaminhamento
   - OU Agendamento online (em nome do paciente)
```

---

## 4. ARQUITETURA DE INFORMACAO (IA)

### 4.1 Sitemap Definitivo

```
hoftalon.com.br/
|
|-- / (Home)
|
|-- /sobre/
|   |-- /sobre/historia/
|   |-- /sobre/qualidade-e-acreditacoes/    (ONA, Newsweek, ICO, WAEH)
|   |-- /sobre/sustentabilidade/            (Relatorio 2024 + ESG)
|   |-- /sobre/responsabilidade-social/     (De Olho nos Olhinhos + projetos)
|   |-- /sobre/ensino-e-pesquisa/           (Residencia medica 2026)
|
|-- /servicos/
|   |-- /servicos/consultas/
|   |   |-- /servicos/consultas/[slug]/     (ex: oftalmologia-pediatrica, retina, glaucoma)
|   |-- /servicos/exames/
|   |   |-- /servicos/exames/[slug]/        (ex: fundo-de-olho, campo-visual, topografia)
|   |-- /servicos/cirurgias/
|   |   |-- /servicos/cirurgias/[slug]/     (ex: catarata, refrativa, pterígio)
|   |-- /servicos/urgencia-24h/             (diferencial - pagina dedicada)
|   |-- /servicos/transplantes/
|
|-- /corpo-clinico/                         (diretorio com filtros e busca)
|   |-- /corpo-clinico/[nome-do-medico]/    (perfil individual)
|
|-- /unidades/
|   |-- /unidades/souza-naves/              (sede 24h)
|   |-- /unidades/cambara/
|   |-- /unidades/fernando-de-noronha/
|   |-- /unidades/rolandia/
|   |-- /unidades/clinic-souza-naves/
|   |-- /unidades/clinic-hospitalar/
|   |-- /unidades/clinic-ayrton-senna/
|
|-- /pacientes/
|   |-- /pacientes/agendar/                 (formulario de solicitacao)
|   |-- /pacientes/agendar/confirmacao/     (pagina pos-envio)
|   |-- /pacientes/fila-sus/                (consulta de posicao)
|   |-- /pacientes/convenios/               (lista de convenios atendidos)
|   |-- /pacientes/preparo-exames/          (orientacoes pre-exame/cirurgia)
|   |-- /pacientes/portal/                  (login front-end)
|
|-- /medicos/
|   |-- /medicos/portal/                    (login front-end)
|
|-- /blog/                                  (artigos e noticias)
|   |-- /blog/[categoria]/
|   |-- /blog/[slug-do-post]/
|
|-- /quero-ajudar/
|   |-- /quero-ajudar/doacoes/
|   |-- /quero-ajudar/projetos-sociais/
|
|-- /carreiras/                             (trabalhe conosco)
|
|-- /contato/                               (formulario + info por unidade)
|   |-- /contato/ouvidoria/
|
|-- /busca/                                 (resultados de busca global)
|
|-- /privacidade/                           (LGPD)
|
|-- /404/                                   (pagina nao encontrada customizada)
|
|-- /en/                                    (espelho completo em ingles)
|   |-- /en/about/
|   |-- /en/services/
|   |   |-- /en/services/consultations/[slug]/
|   |   |-- /en/services/exams/[slug]/
|   |   |-- /en/services/surgeries/[slug]/
|   |   |-- /en/services/24h-emergency/
|   |   |-- /en/services/transplants/
|   |-- /en/medical-staff/
|   |-- /en/units/
|   |-- /en/patients/
|   |-- /en/blog/
|   |-- /en/contact/
|   |-- /en/support-us/
```

### 4.2 Contagem de Templates Unicos

| # | Template | Paginas que usam | Prioridade |
|---|----------|-----------------|------------|
| 1 | Home | 1 | P0 |
| 2 | Pagina institucional (texto + imagens) | Historia, Qualidade, Sustentabilidade, Social, Ensino | P0 |
| 3 | Listagem de servicos (grid + filtros) | Consultas, Exames, Cirurgias, Transplantes | P0 |
| 4 | Pagina de servico individual | Cada exame/cirurgia/consulta especifica | P0 |
| 5 | Pagina de destaque (Urgencia 24h) | 1 | P0 |
| 6 | Diretorio de medicos (grid + filtros + busca) | 1 | P1 |
| 7 | Perfil de medico individual | N (1 por medico) | P1 |
| 8 | Pagina de unidade (mapa + info) | 7 | P0 |
| 9 | Formulario de agendamento | 1 | P0 |
| 10 | Pagina de confirmacao (pos-formulario) | 1 | P0 |
| 11 | Consulta fila SUS | 1 | P0 |
| 12 | Login (Paciente/Medico) | 2 | P1 |
| 13 | Placeholder pos-login (Portal) | 2 | P1 |
| 14 | Blog - listagem | 1 | P1 |
| 15 | Blog - artigo | N | P1 |
| 16 | Contato | 1 | P0 |
| 17 | Resultados de busca | 1 | P1 |
| 18 | Pagina 404 | 1 | P1 |
| 19 | Pagina generica (privacidade, carreiras, convenios) | 3-4 | P2 |
| | **Total de templates unicos** | **~19** | |

---

## 5. NAVEGACAO

### 5.1 Header - Navegacao Principal (Desktop)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ Utility bar (topo fino, fundo cinza claro):                                  │
│ Portal do Paciente | Portal do Medico | Ouvidoria | [A-] [A+] | [🌐 PT|EN] │
│                                                                              │
│ [LOGO HOFTALON]                              [🔍 Buscar]  [AGENDAR CONSULTA]│
│                                                                              │
│ Nav principal:                                                               │
│ O Hospital▼  Servicos▼  Corpo Clinico  Unidades▼  Pacientes▼  Blog  Contato │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Busca Global (ao clicar no icone 🔍):**
```
┌──────────────────────────────────────────────────────────────────┐
│  [X fechar]                                                       │
│                                                                   │
│  O que voce esta procurando?                                      │
│  [____________________________________] [Buscar]                  │
│                                                                   │
│  Buscas frequentes:                                               │
│  Catarata | Glaucoma | Agendamento | Fila SUS | Convenios        │
└──────────────────────────────────────────────────────────────────┘
```

**Mega-menu "O Hospital":**
```
┌─────────────────────────────────────────────┐
│  O Hospital                                  │
│  ─────────                                   │
│  Nossa Historia                              │
│  Qualidade e Acreditacoes                    │
│  Sustentabilidade                            │
│  Responsabilidade Social                     │
│  Ensino e Pesquisa                           │
│                                              │
│  [Badge: Newsweek 2026] [Badge: ONA Pleno]  │
└─────────────────────────────────────────────┘
```

**Mega-menu "Servicos":**
```
┌─────────────────────────────────────────────────┐
│  Servicos                                        │
│  ────────                                        │
│  Consultas          Cirurgias                    │
│  Exames             Transplantes                 │
│                                                  │
│  ★ Urgencia Oftalmologica 24h                    │
│    Plantao inclusive de madrugada                │
│                                                  │
│  [CTA: Ver todos os servicos]                    │
└─────────────────────────────────────────────────┘
```

**Mega-menu "Unidades":**
```
┌───────────────────────────────────────────────────────────┐
│  Unidades                                                  │
│  ────────                                                  │
│  HOSPITAL                        HOFTALON CLINIC           │
│  ────────                        ──────────────            │
│  Souza Naves (Sede) ★ 24h       Clinic Souza Naves        │
│  Cambara                         Clinic Hospitalar         │
│  Fernando de Noronha             Clinic Ayrton Senna       │
│  Rolandia                                                  │
│                                                            │
│  [CTA: Ver todas as unidades no mapa]                      │
└───────────────────────────────────────────────────────────┘
```

**Mega-menu "Pacientes":**
```
┌─────────────────────────────────────────────┐
│  Pacientes                                   │
│  ─────────                                   │
│  Agendar Consulta                            │
│  Consultar Fila SUS                          │
│  Convenios Atendidos                         │
│  Preparo para Exames                         │
│  Portal do Paciente (Login)                  │
│                                              │
│  [CTA: Agendar agora]                        │
└─────────────────────────────────────────────┘
```

### 5.2 Header - Navegacao Mobile

```
┌────────────────────────────────┐
│ [LOGO]   [🔍] [🌐PT]  [☰ Menu]│
└────────────────────────────────┘

┌────────────────────────────────┐
│ [AGENDAR CONSULTA] [WHATSAPP] │  ← sticky bottom bar
└────────────────────────────────┘
```

- Menu hamburger abre drawer lateral full-height
- Itens expansiveis com acordeao (+/-)
- Portal do Paciente e Portal do Medico no topo do drawer
- Botao [A+/A-] acessivel no drawer
- Botoes de acao (Agendar + WhatsApp) ficam fixos na barra inferior
- Busca acessivel pelo icone no header

### 5.3 Footer

```
┌──────────────────────────────────────────────────────────────────┐
│  [LOGO HOFTALON]                                                  │
│                                                                   │
│  O Hospital    Servicos      Pacientes      Contato              │
│  ──────────    ────────      ─────────      ───────              │
│  Historia      Consultas     Agendar        Unidades             │
│  Qualidade     Exames        Fila SUS       Ouvidoria            │
│  Sustentab.    Cirurgias     Convenios      Trabalhe Conosco     │
│  Social        Urgencia 24h  Portal         Doacoes              │
│  Ensino        Transplantes  Preparo                             │
│                                                                   │
│  ───────────────────────────────────────────────────────────────  │
│                                                                   │
│  SELOS: [Newsweek 2026] [ONA Pleno] [ICO] [WAEH]                │
│                                                                   │
│  Unidade Sede: Rua Senador Souza Naves, 648 - Londrina/PR       │
│  Atendimento 24h | Tel: (43) 3375-9500                           │
│                                                                   │
│  [Facebook] [Instagram] [LinkedIn] [YouTube]                     │
│                                                                   │
│  © 2026 Hoftalon Hospital de Olhos | CNPJ 07.194.341/0001-94    │
│  Responsavel Tecnico: Dr. [Nome] - CRM/PR [Numero]              │
│  Politica de Privacidade | LGPD | Mapa do Site                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## 6. HIERARQUIA DE CONTEUDO POR PAGINA

### 6.1 HOME - Hierarquia de Secoes (8 secoes - scroll vertical)

```
SECAO 1 - HERO (viewport inteiro)
├── Headline: "Ha 33 anos transformando vidas atraves de novos olhares"
├── Sub-headline: Hospital referencia em oftalmologia
├── CTA primario: "Agendar Consulta"
├── CTA secundario: "Conheca nossos servicos"
└── Badge flutuante: "Atendimento 24h"

SECAO 2 - BARRA DE ACOES RAPIDAS (sticky em mobile)
├── [icon] Agendar Consulta
├── [icon] Resultados de Exames (→ Portal login)
├── [icon] Fila SUS
└── [icon] WhatsApp

SECAO 3 - CREDIBILIDADE + NUMEROS (combinado)
├── Barra de selos: Newsweek 2026 | ONA Pleno | ICO | WAEH
├── Breve descricao de cada selo (tooltip ou texto curto)
├── Separador visual
├── Numeros do Hoftalon (counter animado, respeitando prefers-reduced-motion)
│   ├── 33 anos de atuacao
│   ├── 42a posicao mundial em cirurgias de catarata
│   ├── X mil+ atendimentos/ano
│   └── 7 unidades em Londrina
└── Nota: Counters animados SOMENTE se prefers-reduced-motion: no-preference.
    Caso contrario, exibir numeros estaticos.

SECAO 4 - SERVICOS EM DESTAQUE (cards)
├── Consultas Oftalmologicas
├── Exames Especializados
├── Cirurgias (destaque catarata)
├── Urgencia 24h (card diferenciado visualmente)
├── Transplantes de Cornea
└── CTA: "Ver todos os servicos"

SECAO 5 - URGENCIA 24H + UNIDADES (combinado)
├── Banner destaque: "Urgencia Oftalmologica 24 horas"
│   ├── "Plantao oftalmologico inclusive de madrugada"
│   ├── Endereco da sede (Souza Naves)
│   ├── Telefone clicavel
│   └── CTA: WhatsApp
├── Separador
├── Mapa com pins das 7 unidades
├── Cards com nome, endereco, horario, telefone
└── CTA por unidade: "Ver detalhes" | "Como chegar"

SECAO 6 - CORPO CLINICO (preview)
├── Headline: "Equipe medica especializada"
├── Carousel com 4-6 medicos em destaque
├── Nome, especialidade, foto
└── CTA: "Conheca todo o corpo clinico"

SECAO 7 - BLOG / NOTICIAS (ultimos 3 posts)
├── Cards com imagem, titulo, resumo, data
└── CTA: "Ver todas as noticias"

SECAO 8 - CTA FINAL DE AGENDAMENTO
├── "Agende sua consulta"
├── Formulario rapido inline (nome + telefone + tipo)
└── OU botoes: Agendar | WhatsApp | Ligar
```

### 6.2 PAGINA DE SERVICO INDIVIDUAL - Hierarquia (SEO Landing Page)

```
BREADCRUMB: Home > Servicos > [Categoria] > [Nome do Servico]

SECAO 1 - HEADER DO SERVICO
├── Titulo H1: ex. "Cirurgia de Catarata" (otimizado para SEO)
├── Descricao introdutoria (2-3 paragrafos)
└── Imagem representativa

SECAO 2 - DETALHES
├── O que e / Como funciona
├── Indicacoes
├── Diferenciais do Hoftalon neste servico
└── Preparacao necessaria (se aplicavel)

SECAO 3 - FAQ (schema markup FAQPage)
├── Perguntas frequentes sobre o servico
├── Respostas curtas e claras
└── Otimizado para Google Featured Snippets

SECAO 4 - MEDICOS RELACIONADOS
├── Grid de medicos que realizam este servico
└── CTA: "Agendar com este especialista"

SECAO 5 - CTA DE AGENDAMENTO
├── "Agende sua [consulta/exame/cirurgia]"
└── Botoes: Agendar Online | WhatsApp | Ligar

SIDEBAR (desktop):
├── Acoes rapidas (agendar, WhatsApp)
├── Servicos relacionados
└── Selos de credibilidade
```

### 6.3 PAGINA DE UNIDADE - Hierarquia

```
BREADCRUMB: Home > Unidades > [Nome da Unidade]

SECAO 1 - HEADER
├── Nome da unidade
├── Badge: "24h" (se aplicavel)
├── Galeria de fotos
└── Mapa com localizacao

SECAO 2 - INFORMACOES PRATICAS
├── Endereco completo
├── Telefone(s) clicaveis
├── WhatsApp
├── Horario de funcionamento
├── Tipo de atendimento (SUS / Convenio / Particular)
└── Como chegar (link Google Maps)

SECAO 3 - SERVICOS DISPONIVEIS NESTA UNIDADE
├── Lista de servicos/exames disponiveis
└── CTA: "Agendar nesta unidade"

SECAO 4 - CTA
├── Agendar Consulta (pre-seleciona unidade)
└── WhatsApp desta unidade

VERSAO PARA IMPRESSAO:
├── Nome, endereco, telefone, horario
├── Mapa estatico
└── Ocultar: nav, footer, CTAs, WhatsApp flutuante
```

### 6.4 PAGINA 404

```
┌─────────────────────────────────────────────┐
│  [Logo Hoftalon]                             │
│                                              │
│  Pagina nao encontrada                       │
│                                              │
│  Parece que esta pagina nao existe ou        │
│  foi movida. Mas podemos ajudar voce:        │
│                                              │
│  [🔍] Buscar no site: [___________]          │
│                                              │
│  Ou acesse diretamente:                      │
│  • Agendar Consulta                          │
│  • Consultar Fila SUS                        │
│  • Nossas Unidades                           │
│  • Contato                                   │
│                                              │
│  [Voltar para a pagina inicial]              │
└─────────────────────────────────────────────┘
```

### 6.5 PAGINA DE RESULTADOS DE BUSCA

```
BREADCRUMB: Home > Busca

HEADER:
├── "Resultados para: '[termo buscado]'"
├── X resultados encontrados
└── Campo de busca para refinar

RESULTADOS (lista):
├── [Icone tipo] Titulo da pagina
│   ├── Trecho com termo destacado
│   ├── URL da pagina
│   └── Categoria (Servico | Unidade | Blog | Medico | etc.)
├── ...
└── Paginacao

ESTADO VAZIO:
├── "Nenhum resultado para '[termo]'"
├── "Sugestoes:"
│   ├── "Verifique a ortografia"
│   ├── "Tente termos mais genericos"
│   └── "Use uma palavra de cada vez"
├── "Buscas populares:"
│   └── Catarata | Glaucoma | Agendamento | Fila SUS
└── "Precisa de ajuda? [Fale conosco]"
```

---

## 7. PADROES DE INTERACAO E COMPONENTES UX

### 7.1 Componentes Globais

| Componente | Comportamento | Onde aparece |
|-----------|--------------|-------------|
| **Sticky header** | Comprime ao scroll, mantem nav + CTA + busca | Todas as paginas |
| **Barra de acoes rapidas** | 4 botoes com icones, sticky em mobile | Home (mobile: sticky bottom) |
| **Botao WhatsApp flutuante** | Canto inferior direito, sempre visivel, com prefill msg | Todas as paginas |
| **Language switcher** | Globe icon + "PT \| EN" (texto, nao bandeiras) | Utility bar global |
| **Font size controls** | Botoes A- / A+ na utility bar | Utility bar global |
| **Busca global** | Icone lupa no header, abre overlay | Header global |
| **Breadcrumbs** | Navegacao hierarquica, schema markup | Todas exceto Home |
| **Trust bar** | Selos em linha horizontal | Home, rodape, paginas institucionais |
| **CTA de agendamento** | Botao primario azul, sempre visivel | Header + secoes de conteudo |
| **Cookie consent** | Banner inferior LGPD | Primeira visita |
| **Back to top** | Botao aparece apos scroll > 50vh | Paginas longas |

### 7.2 Padroes de Formulario

**Formulario de Agendamento (Solicitacao de Consulta):**
```
┌─────────────────────────────────────────────┐
│  Agendar Consulta                            │
│  ─────────────────                           │
│                                              │
│  Tipo de atendimento: *                      │
│  ( ) Consulta  ( ) Exame  ( ) Cirurgia      │
│                                              │
│  Unidade preferida: *                        │
│  [Dropdown com 7 unidades ▼]                 │
│                                              │
│  Convenio: *                                 │
│  [Dropdown com busca ▼] ou [Particular] [SUS]│
│                                              │
│  Nome completo: *                            │
│  [________________________]                  │
│                                              │
│  CPF: *                                      │
│  [___.___.___-__]                            │
│                                              │
│  Telefone (WhatsApp): *                      │
│  [(__)_____-____]                            │
│                                              │
│  E-mail:                                     │
│  [________________________]                  │
│                                              │
│  Preferencia de horario:                     │
│  ( ) Manha  ( ) Tarde  ( ) Qualquer          │
│                                              │
│  Observacoes (opcional):                     │
│  [________________________]                  │
│                                              │
│  [✓] Concordo com a Politica de Privacidade *│
│                                              │
│  [    SOLICITAR AGENDAMENTO    ]             │
│                                              │
│  * campos obrigatorios                       │
│  Retornaremos em ate 24h uteis via WhatsApp  │
└─────────────────────────────────────────────┘

VALIDACAO INLINE:
- Campos obrigatorios: borda vermelha + mensagem abaixo
- CPF invalido: "CPF invalido. Verifique os numeros."
- Telefone incompleto: "Informe o telefone com DDD."
- Checkbox LGPD: "Voce precisa aceitar a Politica de Privacidade."
```

**Formulario Fila SUS:**
```
┌─────────────────────────────────────────────┐
│  Consultar Posicao na Fila SUS               │
│  ──────────────────────────────              │
│                                              │
│  Nome completo: *                            │
│  [________________________]                  │
│                                              │
│  CPF: *                                      │
│  [___.___.___-__]                            │
│                                              │
│  [   CONSULTAR POSICAO   ]                   │
│                                              │
│  * campos obrigatorios                       │
│  Seus dados sao protegidos conforme LGPD.    │
│  Saiba mais em nossa Politica de Privacidade │
└─────────────────────────────────────────────┘
```

### 7.3 Padroes de Login (Front-end Only)

**Portal do Paciente:**
```
┌─────────────────────────────────────────────┐
│        [Logo Hoftalon]                       │
│                                              │
│        Portal do Paciente                    │
│        ──────────────────                    │
│                                              │
│  CPF:                                        │
│  [___.___.___-__]                            │
│                                              │
│  Senha:                                      │
│  [____________] [👁]                          │
│                                              │
│  [    ENTRAR    ]                             │
│                                              │
│  Esqueci minha senha                         │
│  Primeiro acesso? Cadastre-se                │
│                                              │
│  ─────────────────────────                   │
│  Precisa de ajuda?                           │
│  (43) 3375-9500 | WhatsApp                  │
└─────────────────────────────────────────────┘
```

### 7.4 Estados de UI (Design System)

Todos os componentes interativos devem definir estes estados:

| Estado | Visual | Quando |
|--------|--------|--------|
| **Default** | Estado inicial do componente | Pagina carregada |
| **Hover** | Sutil mudanca de cor/sombra | Mouse sobre (desktop) |
| **Focus** | Borda azul 2px + outline | Navegacao por teclado |
| **Active/Pressed** | Escurecimento do fundo | Clique/toque |
| **Loading** | Spinner + texto "Carregando..." | Aguardando resposta |
| **Success** | Fundo verde claro + icone check | Acao completada |
| **Error** | Borda vermelha + mensagem + icone alerta | Falha na acao |
| **Empty** | Ilustracao + mensagem amigavel + acao sugerida | Sem dados para exibir |
| **Disabled** | Opacidade 50% + cursor not-allowed | Acao indisponivel |
| **Skeleton** | Blocos cinza pulsantes | Carregamento inicial da pagina |

**Padroes de notificacao:**
```
TOAST (canto superior direito, some em 5s):
┌──────────────────────────────────┐
│ ✅ Solicitacao enviada!          │  ← Sucesso (fundo verde)
│    Protocolo #HOFT-2026XXXX     │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ ⚠️ Erro ao enviar.              │  ← Erro (fundo vermelho)
│    Tente novamente.             │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ ℹ️ Voce sera redirecionado      │  ← Info (fundo azul)
│    para o WhatsApp.             │
└──────────────────────────────────┘
```

---

## 8. ESTRATEGIA DE RESPONSIVIDADE

### 8.1 Breakpoints

| Breakpoint | Largura | Layout |
|-----------|---------|--------|
| Mobile S | 320px | 1 coluna, fonte base 18px |
| Mobile L | 375-428px | 1 coluna, cards empilhados |
| Phablet | 640px | 2 colunas parcial, cards lado a lado |
| Tablet | 768px | 2 colunas, sidebar visivel |
| Desktop | 1024px | Layout completo, mega-menus |
| Wide | 1440px+ | Conteudo centralizado max-width 1280px |

### 8.2 Adaptacoes Mobile Criticas

1. **Header:** Logo comprimido + busca + language + hamburger
2. **Barra de acoes:** Se transforma em barra fixa inferior com 2 acoes (Agendar + WhatsApp)
3. **Mega-menus:** Viram acordeao no drawer lateral
4. **Mapa de unidades:** Cards empilhados com botao "Como chegar" (abre Google Maps nativo)
5. **Numeros/counters:** Exibidos estaticamente (sem animacao) ou carrossel horizontal com swipe
6. **Tabelas:** Scroll horizontal ou cards empilhados
7. **Formularios:** Full-width, inputs com tamanho minimo de 44px para toque

### 8.3 Mobile-First Priorities
- Touch targets minimo 44x44px
- Telefones sempre clicaveis (tel:)
- WhatsApp links com prefill de mensagem
- Fonte minima 18px (base para hospital de olhos)
- Contraste WCAG AA em todos os textos

### 8.4 Estrategia de Impressao (Print Styles)

Paginas com print styles dedicados:

| Pagina | O que imprime | O que oculta |
|--------|--------------|-------------|
| Pagina de unidade | Endereco, mapa estatico, telefone, horario | Nav, footer, CTAs, WhatsApp, cookie |
| Confirmacao de agendamento | Protocolo, resumo, dados de contato | Nav, footer, formulario |
| Resultado fila SUS | Posicao, dados do paciente, data de consulta | Nav, footer, formulario |
| Preparo para exames | Instrucoes completas, logo para identificacao | Nav, footer, sidebar, CTAs |
| Perfil do medico | Nome, CRM, especialidade, foto | Nav, footer, CTAs |

Regras globais de impressao:
- `@media print` remove header sticky, footer completo, WhatsApp, cookie consent
- Adiciona logo Hoftalon no topo para identificacao
- Links exibem URL ao lado: `a::after { content: " (" attr(href) ")"; }`
- Fundo branco forcado, texto preto

---

## 9. ACESSIBILIDADE (a11y) - PRINCIPIO FUNDADOR

**Nota:** Este hospital trata pacientes com problemas de visao. A acessibilidade e o mais critico dos requisitos nao-funcionais.

### 9.1 WCAG 2.1 AA (Obrigatorio)
- Contraste minimo 4.5:1 para texto normal, 3:1 para texto grande
- Navegacao completa por teclado (Tab, Enter, Esc, Arrow keys)
- Labels em todos os inputs de formulario (`<label for="">`)
- Alt text descritivo em todas as imagens (nao decorativas)
- Imagens decorativas: `alt=""` ou `role="presentation"`
- ARIA landmarks (`header`, `nav`, `main`, `footer`, `aside`)
- Skip-to-content link como primeiro elemento focavel
- Focus visible em todos os elementos interativos (outline 2px azul)
- VLibras widget mantido (acessibilidade em Libras)
- `lang="pt-BR"` no `<html>`, `lang="en"` nas paginas em ingles

### 9.2 Consideracoes Especificas para Saude Ocular
- **Fonte base 18px** (nao 16px padrao do browser)
- **Controles de fonte:** Botoes A- / A+ no header (3 niveis: 18px, 22px, 26px)
- **Modo alto contraste:** Toggle acessivel que ativa palette preto/branco/amarelo
- **`prefers-reduced-motion: reduce`:** Desativa todos os counters animados, transicoes de hero, carousels auto-play
- **`prefers-contrast: more`:** Aumenta contraste automaticamente
- **`prefers-color-scheme: dark`:** Nao implementar dark mode no MVP, mas nao usar media query que quebre em dark mode
- **Evitar:** Textos sobre imagens sem overlay, cinzas abaixo de #767676, fontes com peso < 400, italic em textos longos

### 9.3 Daltonismo (Color Blindness)
Dado que tratamos pacientes com disturbios visuais:
- **Nunca usar cor como unico indicador** de estado (erro, sucesso, alerta)
- Sempre combinar com: icone + texto + borda/forma
- Testar palette azul com simuladores de:
  - Deuteranopia (verde-vermelho, mais comum)
  - Protanopia (vermelho-verde)
  - Tritanopia (azul-amarelo)
- O azul da marca Hoftalon e naturalmente seguro para a maioria dos tipos de daltonismo

### 9.4 Screen Readers
- Testar com NVDA (Windows) e VoiceOver (Mac/iOS)
- Formularios: `aria-required`, `aria-invalid`, `aria-describedby` para mensagens de erro
- Carousels: `aria-live="polite"` para atualizacoes
- Modals: focus trap, `role="dialog"`, `aria-modal="true"`
- Imagens de selos: alt text descritivo ("Selo Newsweek 2026 - Top Private Hospitals Latin America")

### 9.5 Checklist de Acessibilidade por Componente

| Componente | Requisitos a11y |
|-----------|----------------|
| Header/Nav | `role="navigation"`, `aria-label`, skip link, keyboard nav |
| Mega-menu | `aria-expanded`, `aria-haspopup`, Esc para fechar, arrow keys |
| Formularios | Labels visiveis, `aria-required`, erro inline com `aria-describedby` |
| Carousels | Pause/play, `aria-live`, navegacao por teclado, nao auto-play |
| Mapa | Alternativa textual (lista de enderecos), mapa como `role="img"` com `aria-label` |
| Modals | Focus trap, Esc fecha, `aria-modal`, retorno de foco ao trigger |
| Toasts | `role="status"`, `aria-live="polite"`, duracao minima 5s |
| Busca | `role="search"`, resultados anunciados com `aria-live` |

---

## 10. ESTRATEGIA DE INTERNACIONALIZACAO (i18n)

### 10.1 Abordagem
- **Idioma padrao:** PT-BR (/)
- **Idioma secundario:** EN (/en/)
- **Deteccao:** Nenhuma deteccao automatica. Usuario troca manualmente via toggle no header
- **Toggle visual:** Icone de globo + "PT | EN" (texto, sem bandeiras - bandeiras representam paises, nao idiomas)
- **URLs:** Prefixo /en/ para todas as paginas em ingles
- **SEO:** `<link rel="alternate" hreflang="pt-BR">` e `hreflang="en"` em todas as paginas, sitemap separado por idioma
- **Fallback:** Se pagina EN nao existir (ex: blog post nao traduzido), redireciona para versao PT com aviso

### 10.2 Escopo da Traducao

| Secao | Traduzir para EN? | Justificativa |
|-------|-------------------|---------------|
| Home | Sim | Primeira impressao para visitantes internacionais |
| Sobre | Sim | Dados institucionais para parcerias academicas |
| Servicos | Sim | Referencia medica internacional |
| Corpo Clinico | Sim | Pesquisadores buscam especialistas |
| Unidades | Sim (resumido) | Localizacao basica |
| Pacientes/Agendar | Sim | Pacientes estrangeiros |
| Fila SUS | Nao | Exclusivo para pacientes brasileiros |
| Blog | Seletivo | Apenas artigos de relevancia cientifica |
| Contato | Sim | Canal de comunicacao |
| Carreiras | Nao | Mercado local |
| Quero Ajudar | Sim | Doacoes internacionais possiveis |
| 404 | Sim | Visitante internacional pode cair em 404 |

---

## 11. FLUXO DE CONVERSAO E CTAs

### 11.1 Hierarquia de CTAs

| Nivel | CTA | Cor/Estilo | Onde aparece |
|-------|-----|-----------|-------------|
| Primario | "Agendar Consulta" | Botao solido azul escuro | Header, hero, secoes, footer |
| Secundario | "WhatsApp" | Botao verde WhatsApp | Flutuante, header mobile, secoes |
| Terciario | "Ligar Agora" | Link com icone telefone | Paginas de unidade, contato |
| Quaternario | "Saiba Mais" | Botao outline / link | Cards de servicos, blog |

### 11.2 Pontos de Conversao por Pagina

| Pagina | Conversao principal | Conversao secundaria |
|--------|-------------------|---------------------|
| Home | Agendamento | WhatsApp |
| Servicos (listagem) | Clique no servico | Agendamento direto |
| Servico individual | Agendamento especifico | WhatsApp / Ligar |
| Corpo Clinico | Agendamento com medico | Perfil do medico |
| Unidades | WhatsApp da unidade | Como chegar |
| Blog | Agendamento (CTA no fim) | Compartilhar |
| Urgencia 24h | Ligacao telefonica | WhatsApp / Como chegar |
| 404 | Busca | Links rapidos |

---

## 12. METRICAS UX A MONITORAR

| Metrica | Alvo | Ferramenta |
|---------|------|-----------|
| Tempo para primeiro agendamento | < 2 min | Analytics + form tracking |
| Taxa de conclusao do formulario de agendamento | > 70% | Form analytics |
| Bounce rate na Home | < 40% | GA4 |
| Taxa de uso da versao EN | Monitorar | GA4 (segmento por idioma) |
| Consultas de fila SUS / dia | Monitorar | Event tracking |
| Cliques no WhatsApp | Monitorar | Event tracking |
| Uso dos controles A+/A- | Monitorar | Event tracking |
| Uso do modo alto contraste | Monitorar | Event tracking |
| Buscas realizadas (termos) | Monitorar | Search analytics |
| Lighthouse Performance (mobile) | > 90 | Lighthouse CI |
| Lighthouse Accessibility | > 95 | Lighthouse CI |
| Core Web Vitals (LCP, FID, CLS) | "Good" | Search Console |
| Paginas 404 mais acessadas | Monitorar (para redirects) | GA4 + Search Console |

---

*Documento UX gerado em 19/02/2026 - LDNA S/A Agencia Digital*
*Revisao v1.1: Gaps preenchidos - personas, SEO pages, estados, busca, a11y, print*
