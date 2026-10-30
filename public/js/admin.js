/* BuildNReview admin helpers */
(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const csrf = document.body.dataset.csrf;

  // Confirm before destructive actions.
  $$('form[data-confirm]').forEach((f) => f.addEventListener('submit', (e) => {
    if (!confirm(f.dataset.confirm)) e.preventDefault();
  }));

  $$('[data-select]').forEach((i) => i.addEventListener('focus', () => i.select()));

  // Slug preview follows the product name until the slug is typed by hand.
  const slugify = (s) => s.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 150);
  const src = $('[data-slug-source]');
  const target = $('[data-slug-target]');
  const preview = $('[data-slug-preview]');
  if (src && target) {
    const update = () => { if (preview) preview.textContent = target.value ? slugify(target.value) : slugify(src.value); };
    src.addEventListener('input', update);
    target.addEventListener('input', update);
    update();
  }

  // Live score outputs and overall score.
  const weights = { performance: 0.35, quality: 0.25, ease: 0.2, value: 0.2 };
  const ranges = $$('[data-score]');
  const overall = $('[data-overall]');
  const recalc = () => {
    let total = 0;
    ranges.forEach((r) => {
      total += Number(r.value) * weights[r.dataset.score];
      r.nextElementSibling.textContent = Number(r.value).toFixed(1);
    });
    if (overall) overall.textContent = (Math.round(total * 10) / 10).toFixed(1);
  };
  ranges.forEach((r) => r.addEventListener('input', recalc));
  if (ranges.length) recalc();

  // Image upload from the product form.
  const imgInput = $('[data-image-input]');
  const imgPreview = $('[data-image-preview]');
  const showPreview = () => {
    if (!imgPreview || !imgInput) return;
    imgPreview.innerHTML = imgInput.value ? `<img src="${imgInput.value.replace(/"/g, '')}" alt="">` : '';
  };
  imgInput?.addEventListener('change', showPreview);
  $$('[data-upload]').forEach((box) => {
    const file = $('input[type=file]', box);
    const status = $('[data-upload-status]', box);
    file.addEventListener('change', async () => {
      if (!file.files[0]) return;
      status.textContent = 'Uploading…';
      const body = new FormData();
      body.append('file', file.files[0]);
      body.append('_csrf', csrf);
      try {
        const res = await fetch('/admin/media', { method: 'POST', body, headers: { Accept: 'application/json', 'X-CSRF-Token': csrf } });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Upload failed');
        imgInput.value = data.url;
        showPreview();
        status.textContent = 'Uploaded. Remember to save the review.';
      } catch (err) {
        status.textContent = err.message;
      }
      file.value = '';
    });
  });

  // Warn before leaving a form with unsaved changes.
  const form = $('[data-product-form]');
  if (form) {
    let dirty = false;
    form.addEventListener('input', () => { dirty = true; });
    form.addEventListener('submit', () => { dirty = false; });
    window.addEventListener('beforeunload', (e) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } });
  }
})();
