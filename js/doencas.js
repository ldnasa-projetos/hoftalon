// ============================================================================
// Hoftalon - Glossario de doencas
// Primeiro conjunto, escrito a partir do que o site ja diz sobre cada
// especialidade e sobre os exames. O cliente revisa o texto depois.
// Tratamento aponta para a doenca, e a doenca lista os tratamentos.
// ============================================================================

(function () {
  'use strict';

  var GRUPOS = [
    { id: 'glaucoma', nome: 'Glaucoma' },
    { id: 'pediatria', nome: 'Oftalmopediatria e estrabismo' },
    { id: 'catarata', nome: 'Catarata' },
    { id: 'cornea', nome: 'Córnea' },
    { id: 'retina', nome: 'Retina e vítreo' },
    { id: 'plastica', nome: 'Plástica ocular' },
    { id: 'refrativa', nome: 'Cirurgia refrativa' }
  ];

  var TRATAMENTOS = {
    colirios: {
      nome: 'Colírios',
      texto: 'Tratamento clínico do glaucoma. A escolha depende do estágio da doença.'
    },
    'laser-glaucoma': {
      nome: 'Laser para glaucoma',
      texto: 'Uma das formas de tratar o glaucoma, ao lado do colírio e da cirurgia.'
    },
    'cirurgia-glaucoma': {
      nome: 'Cirurgia de glaucoma',
      texto: 'Indicada conforme o estágio da doença.'
    },
    'cirurgia-catarata': {
      nome: 'Cirurgia de catarata',
      texto: 'Único tratamento definitivo da catarata. O procedimento é rápido, com anestesia local, e a maioria dos pacientes retoma as atividades em poucos dias. No Hoftalon, consulta, exames pré-operatórios e cirurgia acontecem no mesmo hospital.'
    },
    crosslinking: {
      nome: 'Crosslinking',
      texto: 'Procedimento de córnea indicado no ceratocone.'
    },
    anel: {
      nome: 'Implante de anel intraestromal',
      texto: 'Tratamento indicado no ceratocone.'
    },
    transplante: {
      nome: 'Transplante de córnea',
      texto: 'Inclui a técnica lamelar. Indicado quando a córnea precisa ser substituída, como em casos de ceratocone e distrofias corneanas.'
    },
    'laser-retina': {
      nome: 'Laser de retina',
      texto: 'Um dos tratamentos do serviço de retina e vítreo, conforme a doença.'
    },
    injecao: {
      nome: 'Injeção intravítrea',
      texto: 'Aplicação usada no tratamento de doenças da retina, conforme o caso.'
    },
    vitrectomia: {
      nome: 'Vitrectomia',
      texto: 'Cirurgia do vítreo e da retina, entre as técnicas do serviço.'
    },
    refrativa: {
      nome: 'Cirurgia refrativa a laser',
      texto: 'Corrige miopia, hipermetropia e astigmatismo remodelando a córnea. A avaliação define a técnica. Em geral, é considerada para maiores de 18 anos com grau estável há pelo menos um ano.'
    },
    oculos: {
      nome: 'Óculos',
      texto: 'Podem corrigir o desvio em parte dos casos de estrabismo, inclusive na criança.'
    },
    ortoptica: {
      nome: 'Exercícios ortópticos',
      texto: 'Opção de tratamento do estrabismo, conforme o caso.'
    },
    toxina: {
      nome: 'Toxina botulínica',
      texto: 'Uma das opções para o alinhamento ocular no estrabismo.'
    },
    'cirurgia-estrabismo': {
      nome: 'Cirurgia de estrabismo',
      texto: 'Correção cirúrgica do desalinhamento, do diagnóstico ao pós-operatório no mesmo hospital.'
    },
    blefaroplastia: {
      nome: 'Blefaroplastia',
      texto: 'Cirurgia das pálpebras caídas, no serviço de plástica ocular.'
    },
    ptose: {
      nome: 'Correção de ptose',
      texto: 'Tratamento da ptose palpebral, quando a pálpebra superior cai sobre o olho.'
    },
    vias: {
      nome: 'Reconstrução de vias lacrimais',
      texto: 'Procedimento da plástica ocular para as vias de drenagem da lágrima.'
    }
  };

  var DOENCAS = [
    {
      id: 'glaucoma',
      nome: 'Glaucoma',
      grupo: 'glaucoma',
      oQueE: 'O glaucoma danifica o nervo óptico, em geral associado ao aumento da pressão intraocular. É uma das principais causas de cegueira irreversível, e pode ser controlado quando o diagnóstico é cedo.',
      diagnostico: 'A detecção usa tomografia de coerência óptica (OCT), campimetria computadorizada e tonometria, exame que mede a pressão intraocular. Desde 2007, o Projeto Glaucoma leva campanhas de exames à comunidade.',
      tratamentos: ['colirios', 'laser-glaucoma', 'cirurgia-glaucoma']
    },
    {
      id: 'estrabismo',
      nome: 'Estrabismo',
      grupo: 'pediatria',
      oQueE: 'O estrabismo é o desalinhamento dos olhos e pode aparecer em qualquer idade. Além da aparência, pode comprometer a visão binocular e a percepção de profundidade. Na criança, a visão influencia aprendizado, coordenação e convívio.',
      diagnostico: 'A avaliação inclui o exame do alinhamento, a acuidade visual e, na infância, o teste do reflexo vermelho e o acompanhamento do desenvolvimento visual.',
      tratamentos: ['oculos', 'ortoptica', 'toxina', 'cirurgia-estrabismo']
    },
    {
      id: 'catarata',
      nome: 'Catarata',
      grupo: 'catarata',
      oQueE: 'A catarata é a opacificação do cristalino, a lente natural do olho. Começa como uma dificuldade leve para enxergar detalhes e cores, e tende a piorar com o tempo.',
      diagnostico: 'Antes da cirurgia entram exames como biometria ocular, microscopia especular e potencial de acuidade visual, usados para planejar a lente e estimar o resultado.',
      tratamentos: ['cirurgia-catarata']
    },
    {
      id: 'ceratocone',
      nome: 'Ceratocone',
      grupo: 'cornea',
      oQueE: 'O ceratocone é uma doença da córnea acompanhada no Hoftalon. O serviço também reúne transplante e outras técnicas de córnea.',
      diagnostico: 'A topografia corneana mapeia a curvatura da córnea e ajuda a detectar o ceratocone, além de orientar a avaliação para cirurgia.',
      tratamentos: ['crosslinking', 'anel', 'transplante']
    },
    {
      id: 'distrofias',
      nome: 'Distrofias corneanas',
      grupo: 'cornea',
      oQueE: 'Distrofias corneanas estão entre as doenças de córnea tratadas no hospital, inclusive quando há indicação de transplante.',
      diagnostico: 'A avaliação da córnea pode incluir topografia e microscopia especular, que observa as células do endotélio.',
      tratamentos: ['transplante']
    },
    {
      id: 'ceratite',
      nome: 'Ceratite infecciosa',
      grupo: 'cornea',
      oQueE: 'Ceratites infecciosas estão entre as doenças de córnea acompanhadas pela equipe.',
      diagnostico: 'O diagnóstico é feito na avaliação da córnea. O caminho do tratamento é definido nessa consulta.',
      tratamentos: []
    },
    {
      id: 'superficie',
      nome: 'Doenças de superfície ocular',
      grupo: 'cornea',
      oQueE: 'Doenças da superfície do olho, como o olho seco, fazem parte do atendimento de córnea.',
      diagnostico: 'O exame Hydra analisa a qualidade da lágrima e das glândulas de lubrificação. É usado em quem sente ardor, coceira ou sensação de areia nos olhos.',
      tratamentos: []
    },
    {
      id: 'retinopatia',
      nome: 'Retinopatia diabética',
      grupo: 'retina',
      oQueE: 'A retinopatia diabética é uma das doenças do fundo do olho atendidas no serviço de retina e vítreo.',
      diagnostico: 'A investigação usa retinografia, mapeamento de retina, OCT e angiofluoresceinografia, exame que avalia a circulação da retina e é importante nessa doença.',
      tratamentos: ['laser-retina', 'injecao', 'vitrectomia']
    },
    {
      id: 'dmri',
      nome: 'Degeneração macular (DMRI)',
      grupo: 'retina',
      oQueE: 'A degeneração macular relacionada à idade afeta a mácula, a região central da retina responsável pelo detalhe da visão.',
      diagnostico: 'OCT e retinografia registram a mácula e acompanham a evolução. A angiofluoresceinografia entra quando é preciso ver a circulação.',
      tratamentos: ['laser-retina', 'injecao']
    },
    {
      id: 'descolamento',
      nome: 'Descolamento de retina',
      grupo: 'retina',
      oQueE: 'O descolamento de retina é uma urgência do fundo do olho, atendida no serviço de retina e vítreo.',
      diagnostico: 'O mapeamento de retina avalia a retina inteira, inclusive a periferia, e detecta lesões com risco de descolamento.',
      tratamentos: ['vitrectomia', 'laser-retina']
    },
    {
      id: 'membrana',
      nome: 'Membrana epirretiniana',
      grupo: 'retina',
      oQueE: 'A membrana epirretiniana é uma das doenças da retina tratadas no hospital.',
      diagnostico: 'OCT e mapeamento de retina mostram a superfície da mácula e orientam a conduta.',
      tratamentos: ['vitrectomia']
    },
    {
      id: 'buraco',
      nome: 'Buraco macular',
      grupo: 'retina',
      oQueE: 'O buraco macular é uma doença da região central da retina, atendida no serviço de retina e vítreo.',
      diagnostico: 'A OCT detalha a mácula e confirma o buraco. A retinografia registra o fundo do olho.',
      tratamentos: ['vitrectomia']
    },
    {
      id: 'vitreo',
      nome: 'Doenças do vítreo',
      grupo: 'retina',
      oQueE: 'Doenças do vítreo, o gel que preenche o olho, fazem parte do atendimento de retina e vítreo.',
      diagnostico: 'O mapeamento de retina e a OCT avaliam o vítreo e a retina ao mesmo tempo.',
      tratamentos: ['vitrectomia']
    },
    {
      id: 'miopia',
      nome: 'Miopia',
      grupo: 'refrativa',
      oQueE: 'A miopia é um dos erros de refração que a cirurgia refrativa pode corrigir, para reduzir a dependência de óculos ou lentes.',
      diagnostico: 'Uma avaliação completa, com topografia corneana, define se há indicação e qual técnica usar.',
      tratamentos: ['refrativa']
    },
    {
      id: 'hipermetropia',
      nome: 'Hipermetropia',
      grupo: 'refrativa',
      oQueE: 'A hipermetropia é um dos erros de refração corrigidos pela cirurgia refrativa a laser.',
      diagnostico: 'A avaliação mede o grau e a córnea. A topografia entra para confirmar se a córnea permite o laser.',
      tratamentos: ['refrativa']
    },
    {
      id: 'astigmatismo',
      nome: 'Astigmatismo',
      grupo: 'refrativa',
      oQueE: 'O astigmatismo é um erro de refração ligado ao formato da córnea. A cirurgia refrativa pode corrigi-lo.',
      diagnostico: 'A topografia corneana mapeia o astigmatismo e também afasta alterações como o ceratocone antes de indicar o laser.',
      tratamentos: ['refrativa']
    },
    {
      id: 'ptose-palpebral',
      nome: 'Ptose palpebral',
      grupo: 'plastica',
      oQueE: 'A ptose é a queda da pálpebra superior. Faz parte da plástica ocular, junto dos procedimentos funcionais e reconstrutivos da região dos olhos.',
      diagnostico: 'A consulta de plástica ocular avalia a posição da pálpebra e o quanto ela cobre o eixo visual.',
      tratamentos: ['ptose']
    },
    {
      id: 'palpebras',
      nome: 'Pálpebras caídas',
      grupo: 'plastica',
      oQueE: 'O excesso de pele das pálpebras é uma queixa atendida na plástica ocular, com objetivo funcional e estético.',
      diagnostico: 'A avaliação observa a pele, o músculo e o campo visual superior.',
      tratamentos: ['blefaroplastia']
    },
    {
      id: 'tumores',
      nome: 'Tumores palpebrais',
      grupo: 'plastica',
      oQueE: 'Tumores das pálpebras são acompanhados pela equipe de plástica ocular.',
      diagnostico: 'A lesão é examinada na consulta. A conduta é definida caso a caso.',
      tratamentos: []
    },
    {
      id: 'vias-lacrimais',
      nome: 'Vias lacrimais',
      grupo: 'plastica',
      oQueE: 'Alterações das vias lacrimais, o caminho de drenagem da lágrima, são atendidas na plástica ocular.',
      diagnostico: 'A consulta avalia o lacrimejamento e o ponto de obstrução.',
      tratamentos: ['vias']
    }
  ];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function grupoNome(id) {
    var g = GRUPOS.filter(function (item) { return item.id === id; })[0];
    return g ? g.nome : id;
  }

  function init() {
    var lista = document.querySelector('[data-doencas-lista]');
    var filtros = document.querySelector('[data-doencas-filtros]');
    var busca = document.querySelector('[data-doencas-busca]');
    var tratamentos = document.querySelector('[data-tratamentos-lista]');
    if (!lista || !filtros) return;

    var estado = { grupo: 'all', termo: '' };
    var q = new URLSearchParams(window.location.search).get('esp');
    if (q && GRUPOS.some(function (g) { return g.id === q; })) estado.grupo = q;

    filtros.innerHTML = [{ id: 'all', nome: 'Todas' }].concat(GRUPOS).map(function (g) {
      var on = g.id === estado.grupo;
      return '<button type="button" data-valor="' + g.id + '" class="rounded-full border px-4 py-1.5 text-[13.6px] font-medium transition-colors ' +
        (on ? 'border-primary bg-primary text-white' : 'border-slate-300 bg-slate-50 text-slate-600 hover:border-primary') +
        '">' + esc(g.nome) + '</button>';
    }).join('');

    lista.innerHTML = GRUPOS.map(function (g) {
      var itens = DOENCAS.filter(function (d) { return d.grupo === g.id; });
      var cards = itens.map(function (d) {
        var chips = d.tratamentos.map(function (id) {
          var t = TRATAMENTOS[id];
          return '<a href="#tratamento-' + id + '" class="rounded-full border border-primary/30 bg-primary-light px-3 py-1 text-[13px] font-semibold text-primary transition-colors hover:bg-primary hover:text-white">' + esc(t.nome) + '</a>';
        }).join('');
        var blocoTrat = d.tratamentos.length
          ? '<div class="flex flex-col gap-2"><h3 class="font-display text-[17px] font-bold text-slate-900">Tratamentos</h3><div class="flex flex-wrap gap-2">' + chips + '</div></div>'
          : '<div class="flex flex-col gap-2"><h3 class="font-display text-[17px] font-bold text-slate-900">Tratamentos</h3><p class="text-[15px] leading-[25px] text-slate-600">A conduta é definida na avaliação, conforme o caso.</p></div>';
        return '' +
          '<article id="doenca-' + d.id + '" data-doenca data-grupo="' + d.grupo + '" data-busca="' + esc(norm(d.nome + ' ' + g.nome)) + '" class="scroll-mt-28 flex flex-col gap-5 rounded-lg border border-slate-200 bg-white p-6 md:p-8">' +
            '<div class="flex flex-col gap-2">' +
              '<p class="text-[11.2px] font-semibold uppercase tracking-[1.12px] text-primary">' + esc(g.nome) + '</p>' +
              '<h2 class="font-display text-[26px] font-bold tracking-[-0.6px] text-slate-900">' + esc(d.nome) + '</h2>' +
            '</div>' +
            '<div class="flex flex-col gap-2"><h3 class="font-display text-[17px] font-bold text-slate-900">O que é</h3><p class="text-[15px] leading-[25px] text-slate-600">' + esc(d.oQueE) + '</p></div>' +
            '<div class="flex flex-col gap-2"><h3 class="font-display text-[17px] font-bold text-slate-900">Como é o diagnóstico</h3><p class="text-[15px] leading-[25px] text-slate-600">' + esc(d.diagnostico) + '</p></div>' +
            blocoTrat +
            '<a href="especialidades.html#' + d.grupo + '" class="w-fit text-[13.6px] font-semibold text-primary transition-colors hover:text-primary-hover">Ver a especialidade</a>' +
          '</article>';
      }).join('');
      return '<div data-grupo-bloco="' + g.id + '" class="flex flex-col gap-4"><h2 class="font-display text-[13px] font-semibold uppercase tracking-[1.12px] text-slate-500">' + esc(g.nome) + '</h2><div class="flex flex-col gap-4">' + cards + '</div></div>';
    }).join('');

    if (tratamentos) {
      var usados = {};
      DOENCAS.forEach(function (d) {
        d.tratamentos.forEach(function (id) {
          if (!usados[id]) usados[id] = [];
          usados[id].push(d);
        });
      });
      tratamentos.innerHTML = Object.keys(usados).map(function (id) {
        var t = TRATAMENTOS[id];
        var links = usados[id].map(function (d) {
          return '<a href="#doenca-' + d.id + '" class="font-semibold text-primary hover:text-primary-hover">' + esc(d.nome) + '</a>';
        }).join('<span class="text-slate-300"> · </span>');
        return '' +
          '<article id="tratamento-' + id + '" class="scroll-mt-28 flex flex-col gap-2 rounded-lg border border-slate-200 bg-slate-50 p-5">' +
            '<h3 class="font-display text-[18px] font-bold text-slate-900">' + esc(t.nome) + '</h3>' +
            '<p class="text-[15px] leading-[24px] text-slate-600">' + esc(t.texto) + '</p>' +
            '<p class="text-[14px] leading-[22px] text-slate-500">Vinculado a ' + links + '</p>' +
          '</article>';
      }).join('');
    }

    var activeCls = ['border-primary', 'bg-primary', 'text-white'];
    var idleCls = ['border-slate-300', 'bg-slate-50', 'text-slate-600', 'hover:border-primary'];

    function aplicar() {
      var visiveis = 0;
      lista.querySelectorAll('[data-doenca]').forEach(function (card) {
        var okGrupo = estado.grupo === 'all' || card.getAttribute('data-grupo') === estado.grupo;
        var okBusca = estado.termo === '' || (card.getAttribute('data-busca') || '').indexOf(estado.termo) !== -1;
        var ok = okGrupo && okBusca;
        card.classList.toggle('hidden', !ok);
        if (ok) visiveis++;
      });
      lista.querySelectorAll('[data-grupo-bloco]').forEach(function (bloco) {
        var any = bloco.querySelector('[data-doenca]:not(.hidden)');
        bloco.classList.toggle('hidden', !any);
      });
      var vazio = document.querySelector('[data-doencas-vazio]');
      if (vazio) vazio.classList.toggle('hidden', visiveis !== 0);
    }

    filtros.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-valor]');
      if (!btn) return;
      estado.grupo = btn.getAttribute('data-valor');
      filtros.querySelectorAll('[data-valor]').forEach(function (b) {
        var on = b === btn;
        activeCls.forEach(function (c) { b.classList.toggle(c, on); });
        idleCls.forEach(function (c) { b.classList.toggle(c, !on); });
      });
      aplicar();
    });

    if (busca) {
      busca.addEventListener('input', function () {
        estado.termo = norm(busca.value.trim());
        aplicar();
      });
    }

    aplicar();

    var hash = (window.location.hash || '').replace('#', '');
    if (hash) {
      var alvo = document.getElementById(hash);
      if (alvo) alvo.scrollIntoView({ block: 'start' });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
