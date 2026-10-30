// Script dùng chung cho mọi trang: menu di động, tìm kiếm tức thì, danh sách so sánh.
import { loadIndex, searchItems, type SearchItem } from './search-core';

/* ---------- Menu di động ---------- */
const menuBtn = document.querySelector<HTMLButtonElement>('.menu-btn');
const nav = document.getElementById('site-nav');
menuBtn?.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') !== 'true';
  menuBtn.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
});

/* ---------- Tìm kiếm tức thì (ô trên header và ô ở hero) ---------- */
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

for (const form of document.querySelectorAll<HTMLFormElement>('form[data-search]')) {
  const lang = form.dataset.lang as 'vi' | 'en';
  const input = form.querySelector<HTMLInputElement>('input[type=search]')!;
  const list = form.querySelector<HTMLUListElement>('[role=listbox]');
  if (!list) continue;
  let items: SearchItem[] = [];
  let active = -1;
  let timer = 0;

  const close = () => {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    active = -1;
  };

  const render = (q: string) => {
    const hits = searchItems(items, q).slice(0, 6);
    const seeAll = lang === 'vi' ? 'Xem tất cả kết quả' : 'See all results';
    const none = lang === 'vi' ? 'Không có sản phẩm khớp. Thử tên hãng hoặc loại máy.' : 'No matches. Try a brand or product type.';
    list.innerHTML = hits.length
      ? hits
          .map(
            (h, i) => `<li role="option" id="${list.id}-${i}" aria-selected="false"><a href="${h.url}">
              <span class="r-name">${esc(h.name)}</span><span class="r-meta">${esc(h.type)}</span>
              <span class="r-score">${h.score.toFixed(1)}</span></a></li>`,
          )
          .join('') + `<li><a class="r-all" href="/${lang}/search/?q=${encodeURIComponent(q)}">${seeAll}</a></li>`
      : `<li class="r-empty">${none}</li>`;
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    active = -1;
  };

  input.addEventListener('focus', async () => { items = await loadIndex(lang); }, { once: true });
  input.addEventListener('input', () => {
    clearTimeout(timer);
    const q = input.value.trim();
    if (q.length < 2) return close();
    timer = window.setTimeout(async () => { items = await loadIndex(lang); render(q); }, 120);
  });
  input.addEventListener('keydown', (e) => {
    const opts = [...list.querySelectorAll<HTMLLIElement>('[role=option]')];
    if (e.key === 'Escape') return close();
    if (!opts.length || list.hidden) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      active = (active + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length;
      opts.forEach((o, i) => o.setAttribute('aria-selected', String(i === active)));
      input.setAttribute('aria-activedescendant', opts[active].id);
    } else if (e.key === 'Enter' && active >= 0) {
      e.preventDefault();
      location.href = opts[active].querySelector('a')!.href;
    }
  });
  document.addEventListener('click', (e) => { if (!form.contains(e.target as Node)) close(); });
}

/* ---------- Danh sách so sánh (lưu trong trình duyệt của người xem) ---------- */
type CompareState = { category: string | null; items: { slug: string; name: string }[] };
const KEY = 'bnr-compare';
const read = (): CompareState => {
  try { return JSON.parse(localStorage.getItem(KEY) || '') as CompareState; } catch { return { category: null, items: [] }; }
};
const write = (s: CompareState) => {
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* chế độ riêng tư: bỏ qua */ }
  window.dispatchEvent(new CustomEvent('compare:change', { detail: s }));
};

const toastEl = document.querySelector<HTMLElement>('[data-toast]');
let toastTimer = 0;
function toast(msg: string) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => (toastEl.hidden = true), 3600);
}

export function toggleCompare(slug: string, name: string, category: string) {
  const s = read();
  if (!s.items) s.items = [];
  const has = s.items.some((i) => i.slug === slug);
  if (has) {
    s.items = s.items.filter((i) => i.slug !== slug);
    if (!s.items.length) s.category = null;
  } else {
    if (s.category && s.category !== category) {
      s.items = [];
      toast(toastEl?.dataset.msgCategory || '');
    }
    if (s.items.length >= 3) { toast(toastEl?.dataset.msgFull || ''); return; }
    s.category = category;
    s.items.push({ slug, name });
  }
  write(s);
}

const tray = document.querySelector<HTMLElement>('[data-compare-tray]');
function sync(s = read()) {
  const slugs = new Set((s.items || []).map((i) => i.slug));
  for (const b of document.querySelectorAll<HTMLButtonElement>('[data-compare]')) {
    const on = slugs.has(b.dataset.compare!);
    b.setAttribute('aria-pressed', String(on));
    const txt = b.querySelector('.txt');
    if (txt) txt.textContent = on ? b.dataset.labelAdded! : b.dataset.labelAdd!;
  }
  if (!tray) return;
  const onComparePage = location.pathname.endsWith('/compare/');
  tray.hidden = !s.items?.length || onComparePage;
  tray.querySelector('.tray-count')!.textContent = (tray.querySelector<HTMLElement>('.tray-count')!.dataset.trayLabel || '').replace('{n}', String(s.items?.length || 0));
  const lang = tray.dataset.lang;
  tray.querySelector('.tray-items')!.innerHTML = (s.items || [])
    .map((i) => `<li>${esc(i.name)}<button type="button" data-tray-remove="${i.slug}" aria-label="${lang === 'vi' ? 'Bỏ' : 'Remove'} ${esc(i.name)}">✕</button></li>`)
    .join('');
  tray.querySelector<HTMLAnchorElement>('[data-tray-go]')!.href = `/${lang}/compare/?p=${(s.items || []).map((i) => i.slug).join(',')}`;
  document.body.style.paddingBottom = tray.hidden ? '' : `${tray.offsetHeight}px`;
}

document.addEventListener('click', (e) => {
  const el = e.target as HTMLElement;
  const toggle = el.closest<HTMLButtonElement>('[data-compare]');
  if (toggle) toggleCompare(toggle.dataset.compare!, toggle.dataset.name!, toggle.dataset.category!);
  const rm = el.closest<HTMLButtonElement>('[data-tray-remove]');
  if (rm) { const s = read(); s.items = s.items.filter((i) => i.slug !== rm.dataset.trayRemove); if (!s.items.length) s.category = null; write(s); }
  if (el.closest('[data-tray-clear]')) write({ category: null, items: [] });
});
window.addEventListener('compare:change', (e) => sync((e as CustomEvent<CompareState>).detail));
window.addEventListener('storage', (e) => { if (e.key === KEY) sync(); });
sync();
