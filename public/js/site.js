/* BuildNReview — small progressive enhancements. The site works without JavaScript. */
(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  /* ---------- mobile menu & dropdown ---------- */
  const menuBtn = $('[data-menu]');
  const nav = $('#site-nav');
  menuBtn?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  $$('[data-dropdown]').forEach((dd) => {
    const btn = $('.dropdown-btn', dd);
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if (!dd.contains(e.target)) { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  });

  /* ---------- live search suggestions ---------- */
  $$('[data-search]').forEach((form) => {
    const input = $('input[type=search]', form);
    const list = $('.suggest', form);
    if (!input || !list) return;
    let timer = null;
    let active = -1;
    let ctrl = null;

    const close = () => { list.hidden = true; input.setAttribute('aria-expanded', 'false'); active = -1; };
    const render = (q, items) => {
      if (!items.length) {
        list.innerHTML = `<li class="s-empty">No reviews match “${esc(q)}”.</li>`;
      } else {
        list.innerHTML = items.map((r, i) => `
          <li role="option" id="${list.id}-${i}" aria-selected="false">
            <a href="${esc(r.url)}"><span class="s-name">${esc(r.name)}</span><span class="s-meta">${esc(r.brand)} · ${esc(r.category)}</span><span class="s-score">${Number(r.score).toFixed(1)}</span></a>
          </li>`).join('') + `<li><a class="s-all" href="/en/search/?q=${encodeURIComponent(q)}">See all results</a></li>`;
      }
      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    };
    input.addEventListener('input', () => {
      const q = input.value.trim();
      clearTimeout(timer);
      if (q.length < 2) return close();
      timer = setTimeout(async () => {
        ctrl?.abort();
        ctrl = new AbortController();
        try {
          const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`, { signal: ctrl.signal });
          const data = await res.json();
          render(q, data.results || []);
        } catch (e) { /* aborted or offline */ }
      }, 160);
    });
    input.addEventListener('keydown', (e) => {
      const opts = $$('[role=option]', list);
      if (list.hidden || !opts.length) return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        active = (active + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length;
        opts.forEach((o, i) => o.setAttribute('aria-selected', String(i === active)));
        input.setAttribute('aria-activedescendant', opts[active].id);
      } else if (e.key === 'Enter' && active >= 0) {
        e.preventDefault();
        location.href = $('a', opts[active]).href;
      } else if (e.key === 'Escape') close();
    });
    document.addEventListener('click', (e) => { if (!form.contains(e.target)) close(); });
  });

  /* ---------- compare tray (stored in this browser only) ---------- */
  const KEY = 'bnr-compare';
  const MAX = 4;
  const tray = $('[data-tray]');
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } };
  const save = (items) => { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) { /* private mode */ } };
  let items = load();

  function syncCompare() {
    $$('[data-compare]').forEach((btn) => {
      const on = items.some((i) => i.slug === btn.dataset.compare);
      btn.setAttribute('aria-pressed', String(on));
      const label = $('[data-label]', btn);
      if (label) label.textContent = on ? 'Added to compare' : 'Add to compare';
    });
    if (!tray) return;
    tray.hidden = items.length === 0;
    document.body.style.paddingBottom = items.length ? `${tray.offsetHeight}px` : '';
    $('[data-tray-count]', tray).textContent = items.length;
    $('[data-tray-items]', tray).innerHTML = items.map((i) => `
      <li>${esc(i.name)}<button type="button" data-remove="${esc(i.slug)}" aria-label="Remove ${esc(i.name)}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></li>`).join('');
    const go = $('[data-tray-go]', tray);
    go.href = `/en/compare/?items=${items.map((i) => encodeURIComponent(i.slug)).join(',')}`;
    go.toggleAttribute('aria-disabled', items.length < 2);
    go.textContent = items.length < 2 ? 'Add one more' : 'Compare now';
  }
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-compare]');
    if (btn) {
      e.preventDefault();
      const slug = btn.dataset.compare;
      if (items.some((i) => i.slug === slug)) items = items.filter((i) => i.slug !== slug);
      else if (items.length < MAX) items.push({ slug, name: btn.dataset.name });
      else { alert('You can compare up to 4 products. Remove one first.'); return; }
      save(items); syncCompare();
      return;
    }
    const rm = e.target.closest('[data-remove]');
    if (rm) { items = items.filter((i) => i.slug !== rm.dataset.remove); save(items); syncCompare(); }
    if (e.target.closest('[data-tray-clear]')) { items = []; save(items); syncCompare(); }
    const go = e.target.closest('[data-tray-go][aria-disabled]');
    if (go) e.preventDefault();
  });
  window.addEventListener('storage', (e) => { if (e.key === KEY) { items = load(); syncCompare(); } });
  syncCompare();

  /* ---------- review gallery ---------- */
  $$('[data-gallery]').forEach((g) => {
    const main = $('.gallery-main img', g);
    $$('.thumb', g).forEach((t) => t.addEventListener('click', () => {
      if (!main) return;
      main.src = t.dataset.src;
      $$('.thumb', g).forEach((x) => x.setAttribute('aria-pressed', String(x === t)));
    }));
  });

  /* ---------- highlight current section in the table of contents ---------- */
  const tocLinks = $$('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const map = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          tocLinks.forEach((a) => a.classList.remove('is-active'));
          map.get(en.target.id)?.classList.add('is-active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    map.forEach((a, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
  }

  /* ---------- Google Analytics (only when an ID is set in Admin > Settings) ---------- */
  const ga = document.body.dataset.ga;
  if (ga) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ga);
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="/go/"]');
      if (a) window.gtag('event', 'affiliate_click', { link_url: a.getAttribute('href') });
    });
  }
})();
