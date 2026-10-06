// ============================================================================
// Hoftalon - main.js (vanilla)
// Interacoes do site. Preenchido no Passo D conforme a secao de motion do DS.
// ============================================================================

(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Primeiro filho "de fluxo" de uma secao (ignora camadas de fundo absolutas/fixas),
  // para o fade subir o CONTEUDO sem mover o background da faixa.
  function firstFlowChild(section) {
    var kids = section.children;
    for (var i = 0; i < kids.length; i++) {
      var pos = window.getComputedStyle(kids[i]).position;
      if (pos !== 'absolute' && pos !== 'fixed') return kids[i];
    }
    return null;
  }

  // Coleta alvos de reveal: qualquer .reveal manual + auto-tag do conteudo de cada
  // secao (pulando o hero e secoes que ja tenham reveal manual dentro).
  function collectRevealTargets() {
    var targets = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    var sections = document.querySelectorAll('main > section, body > section');
    Array.prototype.slice.call(sections).slice(1).forEach(function (section) {
      if (section.querySelector('.reveal')) return; // ja controlado manualmente
      var child = firstFlowChild(section);
      if (child && targets.indexOf(child) === -1) {
        child.classList.add('reveal');
        targets.push(child);
      }
    });
    return targets;
  }

  function inViewport(el) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < vh * 0.92 && rect.bottom > 0;
  }

  // --- Scroll-reveal via IntersectionObserver ---
  function initScrollReveal() {
    var targets = collectRevealTargets();
    if (!targets.length) return;

    // Reduced-motion ou sem IntersectionObserver: mostra tudo, sem animar.
    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    // Habilita o estado escondido so agora (com JS garantido).
    document.documentElement.classList.add('reveal-ready');
    // Elementos ja visiveis no load aparecem imediatamente (sem flash).
    targets.forEach(function (el) {
      if (inViewport(el)) el.classList.add('is-visible');
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    targets.forEach(function (el) {
      if (!el.classList.contains('is-visible')) observer.observe(el);
    });
  }

  // --- Number tickers ([data-ticker]) ---
  // Anima a contagem do numero mantendo prefixo/sufixo do texto original
  // (ex.: "150mil+" -> conta 0..150 e preserva "mil+"). Opt-in por atributo.
  function animateCounter(el) {
    var raw = el.getAttribute('data-ticker-raw');
    if (raw === null) { raw = el.textContent.trim(); el.setAttribute('data-ticker-raw', raw); }
    var m = raw.match(/^(\D*)(\d[\d.]*)(.*)$/);
    if (!m) return;
    var prefix = m[1] || '';
    var target = parseInt(m[2].replace(/\./g, ''), 10);
    var suffix = m[3] || '';
    if (!isFinite(target)) return;

    var duration = 1200, startTs = null;
    function frame(ts) {
      if (startTs === null) startTs = ts;
      var p = Math.min((ts - startTs) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      if (p < 1) {
        el.textContent = prefix + Math.round(eased * target) + suffix;
        requestAnimationFrame(frame);
      } else {
        el.textContent = raw; // valor final exato, formatacao original
      }
    }
    requestAnimationFrame(frame);
  }

  function initCounters() {
    var els = document.querySelectorAll('[data-ticker]');
    if (!els.length) return;
    if (prefersReduced || !('IntersectionObserver' in window)) return; // ja mostram o final

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { observer.observe(el); });
  }

  // --- Carrossel de especialidades (setas prev/next) ---
  function initCarousels() {
    document.querySelectorAll('[data-carousel]').forEach(function (track) {
      var prev = document.querySelector('[data-carousel-prev="' + track.id + '"]');
      var next = document.querySelector('[data-carousel-next="' + track.id + '"]');
      var step = function () {
        var card = track.querySelector('[data-carousel-item]');
        var gap = 18;
        return card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
      };
      var update = function () {
        var maxScroll = track.scrollWidth - track.clientWidth - 1;
        if (prev) prev.disabled = track.scrollLeft <= 0;
        if (next) next.disabled = track.scrollLeft >= maxScroll;
      };
      if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
      if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
      track.addEventListener('scroll', update, { passive: true });

      // Arrastar com o mouse (drag-to-scroll), alem das setas / swipe touch.
      var isDown = false, startX = 0, startScroll = 0, moved = false;
      track.addEventListener('mousedown', function (e) {
        isDown = true;
        moved = false;
        startX = e.pageX;
        startScroll = track.scrollLeft;
        track.style.cursor = 'grabbing';
        track.style.scrollBehavior = 'auto'; // sem smooth durante o arrasto
      });
      window.addEventListener('mouseup', function () {
        if (!isDown) return;
        isDown = false;
        track.style.cursor = '';
        track.style.scrollBehavior = '';
      });
      track.addEventListener('mousemove', function (e) {
        if (!isDown) return;
        e.preventDefault();
        var dx = e.pageX - startX;
        if (Math.abs(dx) > 4) moved = true;
        track.scrollLeft = startScroll - dx;
      });
      // Impede que um arrasto dispare cliques nos cards/links.
      track.addEventListener('click', function (e) {
        if (moved) { e.preventDefault(); e.stopPropagation(); }
      }, true);

      update();
    });
  }

  // --- Filtro de unidades (tabs por categoria) ---
  function initUnitFilters() {
    var filterBar = document.querySelector('[data-unit-filters]');
    var grid = document.querySelector('[data-unit-grid]');
    if (!filterBar || !grid) return;
    var buttons = filterBar.querySelectorAll('[data-filter]');
    var cards = grid.querySelectorAll('[data-categories]');
    var activeCls = ['border-primary', 'bg-primary', 'text-slate-50'];
    var idleCls = ['border-slate-300', 'bg-slate-50', 'text-slate-600', 'hover:border-primary'];
    function setActive(btn) {
      buttons.forEach(function (b) {
        var on = b === btn;
        activeCls.forEach(function (c) { b.classList.toggle(c, on); });
        idleCls.forEach(function (c) { b.classList.toggle(c, !on); });
      });
    }
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-filter]');
      if (!btn) return;
      var f = btn.getAttribute('data-filter');
      setActive(btn);
      cards.forEach(function (card) {
        var cats = card.getAttribute('data-categories') || '';
        var show = f === 'all' || cats.split(' ').indexOf(f) !== -1;
        card.classList.toggle('hidden', !show);
      });
    });
  }

  // --- Filtro generico de galeria (tabs por categoria) ---
  // Usado em "O Hospital" (Nossa Estrutura). Nao interfere no filtro de unidades.
  function initGalleryFilters() {
    var filterBar = document.querySelector('[data-gallery-filters]');
    var grid = document.querySelector('[data-gallery-grid]');
    if (!filterBar || !grid) return;
    var buttons = filterBar.querySelectorAll('[data-gallery-filter]');
    var items = grid.querySelectorAll('[data-gallery-cat]');
    var activeCls = ['border-primary', 'bg-primary', 'text-slate-50'];
    var idleCls = ['border-slate-300', 'bg-slate-50', 'text-slate-600', 'hover:border-primary'];
    function setActive(btn) {
      buttons.forEach(function (b) {
        var on = b === btn;
        activeCls.forEach(function (c) { b.classList.toggle(c, on); });
        idleCls.forEach(function (c) { b.classList.toggle(c, !on); });
      });
    }
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-gallery-filter]');
      if (!btn) return;
      var f = btn.getAttribute('data-gallery-filter');
      setActive(btn);
      items.forEach(function (item) {
        var cats = item.getAttribute('data-gallery-cat') || '';
        var show = f === 'all' || cats.split(' ').indexOf(f) !== -1;
        item.classList.toggle('hidden', !show);
      });
    });
  }

  // --- Abas de especialidades (sidebar -> painel) ---
  function initSpecTabs() {
    var group = document.querySelector('[data-spec-tabs]');
    if (!group) return;
    var tabs = group.querySelectorAll('[data-spec-tab]');
    var panels = document.querySelectorAll('[data-spec-panel]');
    var activeCls = ['bg-primary', 'text-white', 'shadow-sm'];
    var idleCls = ['text-slate-600', 'hover:bg-white'];
    function activate(key, focusTab) {
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-spec-tab') === key;
        activeCls.forEach(function (c) { t.classList.toggle(c, on); });
        idleCls.forEach(function (c) { t.classList.toggle(c, !on); });
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        if (on && focusTab) t.scrollIntoView({ block: 'nearest', inline: 'center' });
      });
      panels.forEach(function (p) {
        p.classList.toggle('hidden', p.getAttribute('data-spec-panel') !== key);
      });
    }
    group.addEventListener('click', function (e) {
      var tab = e.target.closest('[data-spec-tab]');
      if (!tab) return;
      var key = tab.getAttribute('data-spec-tab');
      activate(key, true);
      if (history.replaceState) history.replaceState(null, '', '#' + key);
      var panelTop = document.querySelector('[data-spec-panels]');
      if (panelTop && window.matchMedia('(max-width: 1023px)').matches) {
        panelTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    var alias = { estrabismo: 'pediatria' };
    var initial = (window.location.hash || '').replace('#', '');
    initial = alias[initial] || initial;
    if (initial && group.querySelector('[data-spec-tab="' + initial + '"]')) {
      activate(initial, false);
    }
  }

  function initMobileNav() {
    var btn = document.querySelector('header button[aria-label="Abrir menu"]');
    if (!btn) return;
    var lists = document.querySelectorAll('header nav ul');
    if (lists.length < 2) return;
    var panel = document.createElement('div');
    panel.className = 'hidden border-t border-slate-200 bg-slate-50 px-5 py-3 lg:hidden';
    var clone = lists[1].cloneNode(true);
    clone.className = 'flex flex-col text-[16px] font-medium text-slate-700';
    clone.querySelectorAll('a').forEach(function (a) {
      a.className = 'block rounded-lg px-3 py-3 transition-colors hover:bg-primary/5 hover:text-primary';
    });
    panel.appendChild(clone);
    var bar = btn.parentElement;
    bar.parentElement.appendChild(panel);
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function () {
      var open = panel.classList.toggle('hidden') === false;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
  }

  // --- Busca de convenios (Hoftalon Clinic) ---
  function initConvenioSearch() {
    var input = document.querySelector('[data-convenio-search]');
    var grid = document.querySelector('[data-convenio-grid]');
    if (!input || !grid) return;
    var items = grid.querySelectorAll('[data-convenio-item]');
    var groups = grid.querySelectorAll('[data-convenio-group]');
    var empty = document.querySelector('[data-convenio-empty]');
    function norm(s) {
      return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    }
    input.addEventListener('input', function () {
      var q = norm(input.value.trim());
      var visible = 0;
      items.forEach(function (item) {
        var match = q === '' || norm(item.textContent).indexOf(q) !== -1;
        item.classList.toggle('hidden', !match);
        if (match) visible++;
      });
      // Esconde grupos que ficaram sem itens visiveis.
      groups.forEach(function (g) {
        var any = g.querySelector('[data-convenio-item]:not(.hidden)');
        g.classList.toggle('hidden', !any);
      });
      if (empty) empty.classList.toggle('hidden', visible !== 0);
    });
  }

  // --- Copiar link (compartilhamento de post) ---
  function initCopyLink() {
    var btns = document.querySelectorAll('[data-copy-link]');
    if (!btns.length) return;
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var label = btn.querySelector('[data-copy-label]');
        var feedback = function () {
          if (!label) return;
          var prev = label.textContent;
          label.textContent = 'Link copiado!';
          setTimeout(function () { label.textContent = prev; }, 2000);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(window.location.href).then(feedback, feedback);
        } else {
          feedback();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initCounters();
    initCarousels();
    initUnitFilters();
    initGalleryFilters();
    initSpecTabs();
    initMobileNav();
    initConvenioSearch();
    initCopyLink();
  });
})();
