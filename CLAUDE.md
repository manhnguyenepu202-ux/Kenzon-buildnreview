# BuildNReview (buildnreview.com): working notes for Claude Code

Reply to the owner in Vietnamese. All site text, captions and pins are English for US readers.
Repo: manhnguyenepu202-ux/Kenzon-buildnreview, branch main. Hostinger deploys main automatically (1 to 3 minutes after a push).

## Publishing flow (do all of it, no hand-off to the owner)
1. `git pull` first (the local copy can be older than GitHub). If there are uncommitted changes you did not make, show them and ask.
2. Make the change (see below).
3. `git add` only the files you changed, commit with a short message, `git push origin main`.
4. Wait about 2 minutes, then check the live URLs return 200 (`curl -s -o /dev/null -w "%{http_code} %{content_type}\n" <url>`). Report any non-200.
5. Tell the owner what went live, with the URLs. Do not recap the steps.

## Adding products, reviews, comparisons or guides
- Each batch is one file in `content/` named `YYYY-MM-<batch>.js` with `export default { categories: [], products: [], comparisons: [], guides: [] }`. Copy the shape of `content/2026-11-xtool.js` or `content/2026-11-snapmaker-modules.js`.
- `scripts/content-sync.js` runs at startup. It is insert-only: an existing slug is never overwritten (use `replace: '<tag>'` on an item to overwrite once).
- Categories in use: `3d-printers`, `laser-engravers`, `maker-addons` (check `content/` for others before inventing one).
- Affiliate links: Creality via Awin `creality(handle)`, xTool via Impact `xt(handle)`, Snapmaker `?ref=tatsuki_mura`. Reuse the helper at the top of the existing file for that brand.
- Facts: prices and specs from the official store page, read on the date you write the file. No prices in social posts.
- Honesty: never write "tested" or "hands-on" unless the owner did. If no independent test exists, put "(preview)" in the title and a "A note on evidence" section, and say "We haven't tested it hands-on."
- Check the syntax before committing: `node --check content/<file>.js`.

## Pinterest pins
- Images: `public/pins/<slug>-pin.jpg`, 2000x3000 JPG. Live URL: `https://buildnreview.com/pins/<slug>-pin.jpg`.
- CSV columns: Title, Media URL, Pinterest board, Thumbnail, Description, Link, Publish date, Keywords. Publish date is UTC (13:00 UTC = 22:00 Japan).
- Link: one buildnreview.com page with `?utm_source=pinterest&utm_medium=social&utm_campaign=<slug>`. Never an Amazon link.
- Descriptions end with `#affiliate`. About 3 pins a day, 30 minutes apart.

## Amazon
- Tracking IDs: bnr-web-20 (website), bnr-fb-20 (Facebook), bnr-ig-20 (Instagram), bnr-pin-20 (Pinterest). Use each only on its own platform. Pinterest and Instagram posts carry no Amazon links.
- The website's Amazon button reads `src/lib/amazon.js` (`AMAZON_LINKS`, key = product slug, tracking ID bnr-web-20). Only add a slug when the owner supplies a bnr-web-20 link.
- Amazon disclosure on pages and posts: "As an Amazon Associate we earn from qualifying purchases."

## Do not
- Do not edit existing content files to add a new product; add a new batch file.
- Do not commit `.env`, `data/` or `node_modules/`.
- Do not push to any branch other than main unless the owner asks.
