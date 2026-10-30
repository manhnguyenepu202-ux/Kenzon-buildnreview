# BuildNReview

Website review, so sánh và chấm điểm sản phẩm cho ba ngách: **máy in 3D**, **DIY/dụng cụ**, **đồ gia dụng**.
Song ngữ Việt (`/vi/`) và Anh (`/en/`), xây bằng [Astro](https://astro.build) (Node.js), xuất ra site tĩnh nên chạy được trên mọi gói Hostinger.

## Chạy ở máy

Cần Node.js 22.23 trở lên.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # xuất site vào dist/
npm run preview    # xem bản build
npm run check      # kiểm tra kiểu và lỗi template
```

## Tính năng

| Trang | Đường dẫn | Ghi chú |
|---|---|---|
| Trang chủ | `/vi/` | Hero có ô tìm kiếm, phiếu chấm sản phẩm điểm cao nhất, danh mục, "Đọc nhiều tuần này", đối đầu, quy trình chấm |
| Danh mục | `/vi/category/3d-printers/` | Lọc theo loại, sắp xếp theo điểm, giá, năm ra mắt |
| Review | `/vi/review/<slug>/` | Điểm tổng và 4 điểm thành phần, ưu/nhược, kết luận, thông số, nút affiliate, sản phẩm liên quan |
| So sánh | `/vi/compare/?p=a,b,c` | Chọn tối đa 3 máy cùng danh mục, tô sáng dòng khác nhau, lọc "chỉ khác nhau", link chia sẻ được |
| Đối đầu | `/vi/compare/<a>-vs-<b>/` | Trang tĩnh cho từng cặp (tốt cho SEO), khai báo trong `matchups` ở `src/lib/catalog.ts` |
| Tìm kiếm | `/vi/search/?q=` | Tìm tức thì, không phân biệt dấu ("noi chien" ra "Nồi chiên") |
| Cách chấm điểm, Công bố affiliate, 404 | | |

SEO: schema `Product` + `Review` + `BreadcrumbList` trên trang review, `ItemList` trên danh mục, `WebSite` + `SearchAction` trên trang chủ; `hreflang` vi/en; canonical; Open Graph; `sitemap-index.xml`; `robots.txt`.

## Thêm hoặc sửa sản phẩm

Mỗi sản phẩm gồm **1 file dữ liệu + 2 file bài viết**:

1. `src/content/products/<slug>.yaml`: hãng, model, danh mục, loại, điểm 4 tiêu chí, giá (VND và USD), thông số, link affiliate.
2. `src/content/reviews/vi/<slug>.md` và `src/content/reviews/en/<slug>.md`: tiêu đề, tóm tắt, kết luận, ưu/nhược, nội dung bài.

Sao chép một sản phẩm có sẵn rồi sửa là nhanh nhất. Điểm tổng tự tính theo trọng số trong `src/lib/catalog.ts` (35% hiệu năng, 25% hoàn thiện, 20% dễ dùng, 20% giá trị).

**Quan trọng:** 18 sản phẩm hiện có là **dữ liệu mẫu** để dựng giao diện. Điểm, thông số và nội dung chưa được kiểm chứng. Mỗi trang review hiện thông báo "bài mẫu" khi file YAML có `sample: true`. Sau khi bạn tự kiểm chứng một bài, đổi thành `sample: false`. Trang chủ cũng mô tả quy trình "mua hoặc mượn bản bán lẻ" ở `src/pages/[lang]/index.astro`: sửa cho khớp với cách bạn thật sự đánh giá.

Link affiliate: thay link tìm kiếm Shopee/Amazon trong `offers:` bằng link affiliate thật của bạn. `lang: vi` hiện ở bản tiếng Việt, `lang: en` ở bản tiếng Anh, `lang: all` ở cả hai. Link có sẵn `rel="sponsored nofollow"`.

Ảnh sản phẩm: hiện dùng hình minh họa dạng bản vẽ (`src/components/ProductArt.astro`) vì ảnh của hãng thường có bản quyền. Khi có ảnh được phép dùng, truyền prop `image` cho `ProductArt`.

## Đưa lên GitHub

```bash
git remote add origin https://github.com/<tai-khoan>/buildnreview.git
git push -u origin main
```

## Deploy lên Hostinger

Site là HTML tĩnh trong `dist/`, nên **gói rẻ nhất (Premium/Single Web Hosting) là đủ**. Không cần gói Business hay VPS trừ khi sau này muốn thêm tính năng phía server.

### Cách 1: tự động qua GitHub Actions (khuyên dùng)

Mỗi lần push lên `main`, workflow `.github/workflows/deploy.yml` sẽ build và upload qua FTP.

1. hPanel → **Files → FTP Accounts**: ghi lại *FTP IP/hostname*, *username*, đặt *password*.
2. GitHub repo → **Settings → Secrets and variables → Actions**:
   - Secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
   - Variables: `SITE_URL` = `https://ten-mien-cua-ban.com`
3. Push lên `main` (hoặc vào tab **Actions → Deploy to Hostinger → Run workflow**).
4. Nếu file bị upload sai thư mục: tài khoản FTP chính thường mở ở thư mục tên miền, nên `server-dir: ./public_html/` là đúng. Nếu FTP của bạn mở thẳng vào `public_html`, đổi thành `./`.

### Cách 2: upload tay

```bash
npm run build
```

Nén **nội dung bên trong** `dist/` (gồm cả file ẩn `.htaccess`), vào hPanel → **File Manager → public_html**, upload và giải nén.

### Cách 3: gói Business/Cloud có "Node.js Web App"

hPanel → **Websites → Add Website → Node.js Apps**, kết nối repo GitHub, chọn framework **Astro**, build command `npm run build`, output `dist`.

### Sau khi lên mạng

- Bật SSL miễn phí trong hPanel → **Security → SSL**. `.htaccess` đã tự chuyển HTTP sang HTTPS và bỏ `www`.
- Gửi `https://ten-mien/sitemap-index.xml` vào Google Search Console.
- Kiểm tra dữ liệu có cấu trúc bằng [Rich Results Test](https://search.google.com/test/rich-results).

## Cấu trúc

```
src/
  content/products/*.yaml        dữ liệu sản phẩm
  content/reviews/{vi,en}/*.md   bài review
  i18n/ui.ts                     chuỗi giao diện hai ngôn ngữ
  lib/catalog.ts                 danh mục, nhãn thông số, trọng số điểm, cặp đối đầu
  components/                    ScoreRuler (thước điểm), ProductCard, CompareTable...
  pages/[lang]/                  các trang theo ngôn ngữ
  scripts/                       tìm kiếm tức thì, danh sách so sánh
public/.htaccess                 HTTPS, chọn ngôn ngữ ở trang gốc, cache, 404
docs/design-system.md            nhận diện và quy tắc thiết kế
```
