// ============================================================================
// Hoftalon - Corpo Clinico 2026
// Fonte: PDFs oficiais "CORPO CLINICO 2026" (Amado Noivo internos/externos e
// Souza Naves). Cada medico pode atender em mais de uma unidade, com a
// especialidade descrita exatamente como consta no material do cliente.
//
// COMO EDITAR
// - Contato e opcional: preencha `telefone`, `whatsapp` e/ou `site` de um medico
//   e o card passa a exibir os botoes automaticamente. Sem esses campos, o card
//   mostra apenas nome, especialidade e unidade (sem CTA de agendamento).
// - `whatsapp` deve vir so com digitos (ex.: "5543999999999").
// - `especialidades` alimenta os filtros; `texto` e o rotulo exibido ao paciente.
// ============================================================================

(function (global) {
  'use strict';

  var ESPECIALIDADES = [
    { id: 'catarata', nome: 'Catarata' },
    { id: 'glaucoma', nome: 'Glaucoma' },
    { id: 'retina', nome: 'Retina e Vítreo' },
    { id: 'cornea', nome: 'Córnea' },
    { id: 'refrativa', nome: 'Cirurgia Refrativa' },
    { id: 'plastica', nome: 'Plástica Ocular' },
    { id: 'pediatria', nome: 'Oftalmopediatria' },
    { id: 'estrabismo', nome: 'Estrabismo' },
    { id: 'geral', nome: 'Oftalmologia Geral' }
  ];

  var UNIDADES = {
    'amado-noivo': {
      nome: 'Clinic Amado Noivo',
      endereco: 'R. Antônio Amado Noivo, 394, Vila Ipiranga - Londrina/PR',
      telefone: '(43) 3375-9545'
    },
    'souza-naves': {
      nome: 'Clinic Souza Naves',
      endereco: 'R. Senador Souza Naves, 626, Centro - Londrina/PR',
      telefone: '(43) 3375-9595'
    }
  };

  // vinculo: 'interno' (equipe Hoftalon) | 'externo' (medico parceiro)
  var MEDICOS = [
    // ---------------------------------------------------------------- internos
    { nome: 'Dr. Agenor Paes de Melo Sobrinho', vinculo: 'interno', especialidades: ['estrabismo'], nota: 'Só atende a especialidade',
      atende: [{ unidade: 'amado-noivo', texto: 'Estrabismo infantil' }] },
    { nome: 'Dra. Ana Paula Techentin', vinculo: 'interno', especialidades: ['pediatria', 'estrabismo'],
      atende: [{ unidade: 'amado-noivo', texto: 'Oftalmopediatria e Estrabismo Infantil' }, { unidade: 'souza-naves', texto: 'Oftalmopediatria e Estrabismo Infantil' }] },
    { nome: 'Dr. Arthur Saijo Nakama', vinculo: 'interno', especialidades: ['glaucoma'],
      atende: [{ unidade: 'amado-noivo', texto: 'Glaucoma' }, { unidade: 'souza-naves', texto: 'Glaucoma' }] },
    { nome: 'Dra. Bruna Graciano Tonon', vinculo: 'interno', especialidades: ['cornea', 'catarata'],
      atende: [{ unidade: 'amado-noivo', texto: 'Córnea / Catarata' }, { unidade: 'souza-naves', texto: 'Córnea' }] },
    { nome: 'Dr. Diego Carlos Toneto', vinculo: 'interno', especialidades: ['glaucoma'],
      atende: [{ unidade: 'amado-noivo', texto: 'Glaucoma' }] },
    { nome: 'Dr. Eduardo Morioka Bressanim', vinculo: 'interno', especialidades: ['retina'],
      atende: [{ unidade: 'amado-noivo', texto: 'Retina' }] },
    { nome: 'Dr. Eduardo Pesarini Felipe', vinculo: 'interno', especialidades: ['catarata', 'refrativa'],
      atende: [{ unidade: 'amado-noivo', texto: 'Catarata / Refrativa' }] },
    { nome: 'Dra. Fernanda Galina Pezzini', vinculo: 'interno', especialidades: ['plastica'],
      atende: [{ unidade: 'amado-noivo', texto: 'Plástica' }] },
    { nome: 'Dra. Flávia Naomi Nisioka', vinculo: 'interno', especialidades: ['cornea', 'catarata'],
      atende: [{ unidade: 'amado-noivo', texto: 'Córnea / Catarata' }] },
    { nome: 'Dr. Gabriel Magro Barbi', vinculo: 'interno', especialidades: ['glaucoma'],
      atende: [{ unidade: 'amado-noivo', texto: 'Glaucoma' }] },
    { nome: 'Dra. Giovanna Basso Duraes', vinculo: 'interno', especialidades: ['retina'],
      atende: [{ unidade: 'amado-noivo', texto: 'Retina' }, { unidade: 'souza-naves', texto: 'Retina' }] },
    { nome: 'Dr. Gustavo Curiaki', vinculo: 'interno', especialidades: ['plastica'],
      atende: [{ unidade: 'amado-noivo', texto: 'Plástica' }] },
    { nome: 'Dra. Julia Caroline Azevedo Reis', vinculo: 'interno', especialidades: ['plastica'],
      atende: [{ unidade: 'amado-noivo', texto: 'Plástica' }] },
    { nome: 'Dra. Lara Fabre Pereira', vinculo: 'interno', especialidades: ['retina'],
      atende: [{ unidade: 'amado-noivo', texto: 'Retina' }, { unidade: 'souza-naves', texto: 'Retina' }] },
    { nome: 'Dra. Liane Yumi Tateiwa', vinculo: 'interno', especialidades: ['plastica'],
      atende: [{ unidade: 'amado-noivo', texto: 'Plástica' }] },
    { nome: 'Dra. Lorena Savi Gaspar', vinculo: 'interno', especialidades: ['cornea', 'catarata'],
      atende: [{ unidade: 'amado-noivo', texto: 'Córnea / Catarata' }, { unidade: 'souza-naves', texto: 'Córnea' }] },
    { nome: 'Dra. Luiza Almeida Sandrin', vinculo: 'interno', especialidades: ['retina'],
      atende: [{ unidade: 'amado-noivo', texto: 'Retina' }, { unidade: 'souza-naves', texto: 'Retina' }] },
    { nome: 'Dra. Luíza Sandrin', vinculo: 'interno', especialidades: ['retina', 'catarata'],
      atende: [{ unidade: 'amado-noivo', texto: 'Retina / Catarata' }] },
    { nome: 'Dra. Marilia Burdini Borghi', vinculo: 'interno', especialidades: ['plastica'],
      atende: [{ unidade: 'amado-noivo', texto: 'Plástica' }] },
    { nome: 'Dra. Mariana Ortega', vinculo: 'interno', especialidades: ['plastica'],
      atende: [{ unidade: 'amado-noivo', texto: 'Plástica' }] },
    { nome: 'Dra. Natasha Kuromoto de Castro', vinculo: 'interno', especialidades: ['cornea', 'catarata'],
      atende: [{ unidade: 'amado-noivo', texto: 'Córnea / Catarata' }] },
    { nome: 'Dra. Rita de Kássia Soares Pinheiro', vinculo: 'interno', especialidades: ['glaucoma'],
      atende: [{ unidade: 'amado-noivo', texto: 'Glaucoma' }] },
    { nome: 'Dr. Thiago Agacci Martinazzo', vinculo: 'interno', especialidades: ['retina'],
      atende: [{ unidade: 'amado-noivo', texto: 'Retina' }] },
    { nome: 'Dra. Vanessa Totti Firmiano', vinculo: 'interno', especialidades: ['plastica'],
      atende: [{ unidade: 'amado-noivo', texto: 'Plástica' }] },

    // ------------------------------------------------------- só na Souza Naves
    { nome: 'Dra. Daniela Pantarotto Didoni Muniz', vinculo: 'interno', especialidades: ['plastica'],
      atende: [{ unidade: 'souza-naves', texto: 'Plástica' }] },
    { nome: 'Dr. Gustavo Henrique Soares de Lima', vinculo: 'interno', especialidades: ['retina'],
      atende: [{ unidade: 'souza-naves', texto: 'Retina' }] },
    { nome: 'Dr. Heric Massaaki Sakamoto', vinculo: 'interno', especialidades: ['retina'],
      atende: [{ unidade: 'souza-naves', texto: 'Retina' }] },
    { nome: 'Dr. João Victor Massamitsu Katayama Miyazaki', vinculo: 'interno', especialidades: ['glaucoma'],
      atende: [{ unidade: 'souza-naves', texto: 'Glaucoma' }] },
    { nome: 'Dr. Oton Kazuaki Arabori', vinculo: 'interno', especialidades: ['cornea'],
      atende: [{ unidade: 'souza-naves', texto: 'Córnea' }] },
    { nome: 'Dr. Rafael Yoiti Kato', vinculo: 'interno', especialidades: ['retina'],
      atende: [{ unidade: 'souza-naves', texto: 'Retina' }] },

    // ---------------------------------------------------------------- externos
    { nome: 'Dr. Anderson Hiroshi Kussumoto', vinculo: 'externo',
      especialidades: ['catarata', 'estrabismo', 'refrativa', 'plastica', 'cornea', 'glaucoma'],
      atende: [{ unidade: 'amado-noivo', texto: 'Catarata / Estrabismo / Refrativa / Plástica Palpebral / Pterígio / Ceratocone / Glaucoma / Adaptação de lente de contato' }] },
    { nome: 'Dra. Cybelle Moreno Luize Franco', vinculo: 'externo', especialidades: ['cornea', 'catarata'],
      atende: [{ unidade: 'amado-noivo', texto: 'Córnea / Catarata' }] },
    { nome: 'Dra. Daniela Hasegawa', vinculo: 'externo', especialidades: ['catarata'],
      atende: [{ unidade: 'amado-noivo', texto: 'Catarata' }] },
    { nome: 'Dr. Luiz Fernando Boglini Cavalieri', vinculo: 'externo', especialidades: ['catarata', 'geral'], cidade: 'Ibiporã',
      atende: [{ unidade: 'amado-noivo', texto: 'Catarata e geral' }] },
    { nome: 'Dr. Marcos Toshio Nisioka', vinculo: 'externo', especialidades: ['catarata', 'geral'], cidade: 'Arapongas',
      atende: [{ unidade: 'amado-noivo', texto: 'Catarata e geral' }] },
    { nome: 'Dr. Noboru Yagui', vinculo: 'externo', especialidades: ['cornea', 'catarata'],
      atende: [{ unidade: 'amado-noivo', texto: 'Córnea / Catarata' }] },
    { nome: 'Dr. Nobuaqui Hasegawa', vinculo: 'externo', especialidades: ['catarata'],
      atende: [{ unidade: 'amado-noivo', texto: 'Catarata' }] },
    { nome: 'Dr. Ricardo Montanheiro', vinculo: 'externo', especialidades: ['catarata', 'geral'],
      atende: [{ unidade: 'amado-noivo', texto: 'Catarata / Geral' }] },
    { nome: 'Dr. Sadi Isper', vinculo: 'externo', especialidades: ['geral'], cidade: 'Cornélio Procópio',
      atende: [{ unidade: 'amado-noivo', texto: 'Geral' }] },
    { nome: 'Dr. Nahin Mohamed Ali Geha', vinculo: 'externo', especialidades: ['retina'], nota: 'Só atende a especialidade',
      atende: [{ unidade: 'amado-noivo', texto: 'Retina' }] }
  ];

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------

  var ICON_PIN = '<svg class="size-[13px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>';
  var ICON_PHONE = '<svg class="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  var ICON_GLOBE = '<svg class="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>';
  var ICON_CAL = '<svg class="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function iniciais(nome) {
    var partes = nome.replace(/^Dr[a]?\.\s*/i, '').trim().split(/\s+/);
    var a = partes[0] ? partes[0][0] : '';
    var b = partes.length > 1 ? partes[partes.length - 1][0] : '';
    return (a + b).toUpperCase();
  }

  function normalizar(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  // Texto de especialidade do medico, opcionalmente restrito a uma unidade.
  function textoEspecialidade(medico, unidadeId) {
    var lista = medico.atende;
    if (unidadeId) lista = lista.filter(function (a) { return a.unidade === unidadeId; });
    var textos = lista.map(function (a) { return a.texto; });
    var unicos = textos.filter(function (t, i) { return textos.indexOf(t) === i; });
    return unicos.join(' · ');
  }

  function contatoHTML(m) {
    var linhas = [];
    if (m.telefone) {
      linhas.push('<a href="tel:' + esc(m.telefone.replace(/\D/g, '')) + '" class="flex items-center gap-2 text-[13px] text-slate-600 transition-colors hover:text-primary">' + ICON_PHONE + '<span>' + esc(m.telefone) + '</span></a>');
    }
    if (m.site) {
      var label = m.site.replace(/^https?:\/\//, '').replace(/\/$/, '');
      linhas.push('<a href="' + esc(m.site) + '" target="_blank" rel="noopener" class="flex items-center gap-2 text-[13px] text-slate-600 transition-colors hover:text-primary">' + ICON_GLOBE + '<span>' + esc(label) + '</span></a>');
    }
    if (!linhas.length) return '';
    return '<div class="flex flex-col gap-1.5 border-t border-slate-200 pt-4">' + linhas.join('') + '</div>';
  }

  // CTA so aparece quando o medico tem canal proprio de agendamento.
  function ctaHTML(m) {
    var href = null;
    if (m.whatsapp) href = 'https://wa.me/' + m.whatsapp.replace(/\D/g, '');
    else if (m.agendamento) href = m.agendamento;
    else if (m.site) href = m.site;
    if (!href) return '';
    return '<a href="' + esc(href) + '" target="_blank" rel="noopener" ' +
      'class="mt-auto flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary/[0.06] px-4 py-2.5 text-[13.6px] font-semibold text-primary transition-colors hover:bg-primary hover:text-white">' +
      ICON_CAL + 'Agendar com o médico</a>';
  }

  function avatarHTML(m) {
    if (m.foto) {
      return '<img src="' + esc(m.foto) + '" alt="" class="size-14 shrink-0 rounded-full object-cover" />';
    }
    return '<span class="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0A2A4A] to-[#13518F] text-[15px] font-semibold text-white/90" aria-hidden="true">' + esc(iniciais(m.nome)) + '</span>';
  }

  function cardHTML(m, opts) {
    opts = opts || {};
    var unidades = m.atende.map(function (a) { return UNIDADES[a.unidade] ? UNIDADES[a.unidade].nome : a.unidade; });
    var tagVinculo = opts.ocultarVinculo ? '' : (m.vinculo === 'externo'
      ? '<span class="rounded-full bg-[#FFFBEB] px-2.5 py-[3px] text-[10.4px] font-bold uppercase tracking-[0.4px] text-[#B45309]">Médico parceiro</span>'
      : '<span class="rounded-full bg-primary-light px-2.5 py-[3px] text-[10.4px] font-bold uppercase tracking-[0.4px] text-primary">Corpo clínico</span>');

    var cidade = m.cidade
      ? '<span class="rounded-full border border-slate-200 px-2.5 py-[3px] text-[10.4px] font-semibold uppercase tracking-[0.4px] text-slate-500">' + esc(m.cidade) + '</span>'
      : '';

    var nota = m.nota
      ? '<p class="text-[12px] italic leading-[17px] text-slate-400">' + esc(m.nota) + '</p>'
      : '';

    return '' +
      '<article class="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5" ' +
        'data-medico data-especialidades="' + esc(m.especialidades.join(' ')) + '" ' +
        'data-unidades="' + esc(m.atende.map(function (a) { return a.unidade; }).join(' ')) + '" ' +
        'data-vinculo="' + esc(m.vinculo) + '" data-nome="' + esc(normalizar(m.nome)) + '">' +
        '<div class="flex items-start gap-4">' +
          avatarHTML(m) +
          '<div class="flex min-w-0 flex-col gap-1">' +
            '<h3 class="text-[15px] font-semibold leading-[21px] text-slate-900">' + esc(m.nome) + '</h3>' +
            '<p class="text-[13px] leading-[19px] text-slate-500">' + esc(textoEspecialidade(m, opts.unidade)) + '</p>' +
          '</div>' +
        '</div>' +
        (tagVinculo || cidade ? '<div class="flex flex-wrap gap-1.5">' + tagVinculo + cidade + '</div>' : '') +
        '<ul class="flex flex-col gap-1 text-[12.5px] leading-[18px] text-slate-500">' +
          unidades.map(function (u) { return '<li class="flex items-center gap-1.5">' + ICON_PIN + esc(u) + '</li>'; }).join('') +
        '</ul>' +
        nota +
        contatoHTML(m) +
        ctaHTML(m) +
      '</article>';
  }

  // Lista completa com filtros (usada na pagina de Especialidades).
  function initListagem() {
    var grid = document.querySelector('[data-medicos-grid]');
    if (!grid) return;

    var somente = grid.getAttribute('data-somente');
    var lista = MEDICOS.filter(function (m) { return !somente || m.vinculo === somente; });
    var optsCard = { ocultarVinculo: somente === 'externo' };
    grid.innerHTML = lista.map(function (m) { return cardHTML(m, optsCard); }).join('');

    var cards = grid.querySelectorAll('[data-medico]');
    var busca = document.querySelector('[data-medicos-busca]');
    var vazio = document.querySelector('[data-medicos-vazio]');
    var contador = document.querySelector('[data-medicos-contador]');
    var barras = document.querySelectorAll('[data-medicos-filtros]');

    var estado = { especialidade: 'all', unidade: 'all', termo: '' };
    var qEsp = new URLSearchParams(window.location.search).get('especialidade');
    if (qEsp) estado.especialidade = qEsp;

    var activeCls = ['border-primary', 'bg-primary', 'text-white'];
    var idleCls = ['border-slate-300', 'bg-slate-50', 'text-slate-600', 'hover:border-primary'];

    function aplicar() {
      var visiveis = 0;
      cards.forEach(function (card) {
        var esp = (card.getAttribute('data-especialidades') || '').split(' ');
        var uni = (card.getAttribute('data-unidades') || '').split(' ');
        var nome = card.getAttribute('data-nome') || '';
        var wanted = estado.especialidade === 'all' ? [] : estado.especialidade.split(/\s+/);
        var okEsp = !wanted.length || wanted.some(function (w) { return esp.indexOf(w) !== -1; });
        var ok = okEsp &&
                 (estado.unidade === 'all' || uni.indexOf(estado.unidade) !== -1) &&
                 (estado.termo === '' || nome.indexOf(estado.termo) !== -1);
        card.classList.toggle('hidden', !ok);
        if (ok) visiveis++;
      });
      if (vazio) vazio.classList.toggle('hidden', visiveis !== 0);
      if (contador) {
        contador.textContent = visiveis === 1
          ? '1 médico encontrado'
          : visiveis + ' médicos encontrados';
      }
    }

    barras.forEach(function (barra) {
      var chave = barra.getAttribute('data-medicos-filtros'); // 'especialidade' | 'unidade'
      barra.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-valor]');
        if (!btn) return;
        estado[chave] = btn.getAttribute('data-valor');
        barra.querySelectorAll('[data-valor]').forEach(function (b) {
          var on = b === btn;
          activeCls.forEach(function (c) { b.classList.toggle(c, on); });
          idleCls.forEach(function (c) { b.classList.toggle(c, !on); });
        });
        aplicar();
      });
    });

    if (busca) {
      busca.addEventListener('input', function () {
        estado.termo = normalizar(busca.value.trim());
        aplicar();
      });
    }

    if (estado.especialidade !== 'all') {
      barras.forEach(function (barra) {
        if (barra.getAttribute('data-medicos-filtros') !== 'especialidade') return;
        barra.querySelectorAll('[data-valor]').forEach(function (b) {
          var on = b.getAttribute('data-valor') === estado.especialidade;
          activeCls.forEach(function (c) { b.classList.toggle(c, on); });
          idleCls.forEach(function (c) { b.classList.toggle(c, !on); });
        });
      });
    }

    aplicar();
  }

  // Blocos por especialidade dentro dos paineis ([data-medicos-por-especialidade="catarata"]).
  function initPorEspecialidade() {
    document.querySelectorAll('[data-medicos-por-especialidade]').forEach(function (slot) {
      var ids = (slot.getAttribute('data-medicos-por-especialidade') || '').split(/\s+/);
      var somente = slot.getAttribute('data-somente');
      var limite = parseInt(slot.getAttribute('data-limite') || '4', 10);
      var lista = MEDICOS.filter(function (m) {
        if (somente && m.vinculo !== somente) return false;
        return ids.some(function (id) { return m.especialidades.indexOf(id) !== -1; });
      });
      if (!lista.length) {
        if (slot.parentElement) slot.parentElement.classList.add('hidden');
        return;
      }

      var mostrados = lista.slice(0, limite);
      var optsCard = { ocultarVinculo: somente === 'externo' };
      slot.innerHTML = mostrados.map(function (m) { return cardHTML(m, optsCard); }).join('');

      var rodape = slot.parentElement.querySelector('[data-medicos-total]');
      if (rodape) {
        rodape.textContent = lista.length === 1
          ? '1 especialista nesta área.'
          : lista.length + ' especialistas nesta área.';
      }
    });
  }

  // Amostra do corpo clinico (usada na Hoftalon Clinic).
  function initAmostra() {
    var slot = document.querySelector('[data-medicos-amostra]');
    if (!slot) return;
    var unidade = slot.getAttribute('data-unidade') || '';
    var lista = MEDICOS;
    if (unidade) {
      lista = lista.filter(function (m) {
        return m.atende.some(function (a) { return a.unidade === unidade; });
      });
    }
    var limite = parseInt(slot.getAttribute('data-limite') || '8', 10);
    slot.innerHTML = lista.slice(0, limite).map(function (m) {
      return cardHTML(m, { unidade: unidade || null });
    }).join('');

    var total = document.querySelector('[data-medicos-amostra-total]');
    if (total) total.textContent = String(MEDICOS.length);
  }

  function init() {
    initListagem();
    initPorEspecialidade();
    initAmostra();
  }

  global.HoftalonMedicos = {
    dados: MEDICOS,
    especialidades: ESPECIALIDADES,
    unidades: UNIDADES,
    cardHTML: cardHTML,
    init: init
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
