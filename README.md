# BuildNReview

Website review, so sánh và chấm điểm sản phẩm cho các ngách **máy in 3D**, **laser/CNC & DIY**, **dụng cụ điện** và **đồ gia dụng**.
Tiếng Anh, chạy bằng **Node.js (Express + EJS)**, dữ liệu trong **MySQL**, có **trang Admin** để thêm/sửa bài.

Website: https://buildnreview.com/en/

## Chạy thử trên máy

Cần Node.js 22.5 trở lên (để dùng SQLite có sẵn khi chạy ở máy; trên Hostinger dùng MySQL, Node 20+ là đủ).

```bash
npm install
npm run dev
```

Mở http://localhost:3000/en/. Không cần cài MySQL: khi không có `DB_HOST`, site tự tạo file `data/dev.sqlite` và nạp 24 bài mẫu.
Trang quản trị: http://localhost:3000/admin, đăng nhập bằng `admin@buildnreview.com` / `admin123` (chỉ dùng ở máy, trên server bắt buộc đặt mật khẩu riêng).

| Lệnh | Tác dụng |
|---|---|
| `npm start` | Chạy server (dùng trên Hostinger) |
| `npm run dev` | Chạy và tự khởi động lại khi sửa code |
| `npm run db:migrate` | Tạo các bảng còn thiếu |
| `npm run db:seed` | Nạp các bài mẫu còn thiếu (chạy lại nhiều lần không sao) |
| `npm run db:reset` | **Xóa toàn bộ** bài, danh mục, so sánh, guide, cài đặt rồi nạp lại bài mẫu |

## Các trang

| Trang | Đường dẫn |
|---|---|
| Trang chủ | `/en/`: hero tìm kiếm, "Reviews readers love", danh mục, spotlight, đối đầu, best-of, cách chấm điểm |
| Danh mục | `/en/category/<slug>/`: sắp xếp theo điểm, lượt đọc, giá |
| Review | `/en/review/<slug>/`: điểm tổng, 4 điểm thành phần, ưu/nhược, kết luận, bài viết, thông số, nút affiliate, ô "Maker pick" |
| So sánh tự chọn | `/en/compare/?items=a,b,c`: tối đa 4 sản phẩm, bấm dấu + trên thẻ sản phẩm để thêm |
| Đối đầu | `/en/compare/<slug>/`: bài so sánh do bạn viết trong Admin |
| Best-of | `/en/best/<slug>/`: danh sách xếp hạng kèm giải thưởng |
| Tìm kiếm | `/en/search/?q=` và gợi ý tức thì |
| Khác | How we test, Affiliate disclosure, About, Privacy, 404 |

SEO: schema `Product` + `Review` + `BreadcrumbList` + `ItemList`, canonical, Open Graph, `/sitemap.xml`, `/robots.txt`.
Đường dẫn cũ của bản Astro (`/vi/...`, `/sitemap-index.xml`) tự chuyển hướng 301 sang bản mới.

## Link affiliate

- Mỗi sản phẩm có ô **Product affiliate URL** trong Admin. Nút "Check price" trỏ qua `/go/<slug>` để đếm lượt click, rồi chuyển tới link thật.
- 6 sản phẩm Snapmaker đã gắn sẵn link trang sản phẩm kèm mã `?ref=tatsuki_mura`.
- **Mọi bài review** đều có ô **"Maker pick"** quảng bá một sản phẩm Snapmaker (link affiliate). Chọn sản phẩm cho từng danh mục ở Admin → Categories.
- Link mặc định `https://us.snapmaker.com/?ref=tatsuki_mura` (nút "Shop Snapmaker" ở menu) đổi trong Admin → Settings.
- Lượt click hiện ở Dashboard.

## Nội dung mẫu: việc cần làm trước khi quảng bá

- 24 bài đều bật **Preview review**: trang hiện ghi chú "biên soạn từ thông số nhà sản xuất". Sau khi tự kiểm chứng hoặc dùng thử, bỏ tick ô này.
- 6 bài Snapmaker: thông số và giá lấy từ us.snapmaker.com (10/2026). Điểm số là đánh giá biên tập, nên xem lại.
- 18 bài cũ (chuyển từ bản Astro): nội dung còn ngắn và số liệu chưa kiểm chứng. Nên viết thêm và thêm ảnh thật.
- Ảnh: sản phẩm chưa có ảnh sẽ hiện hình vẽ minh họa. Upload ảnh ở Admin → Images hoặc dán URL ảnh.
- Ô "Retail rating" (ví dụ 4.6/5 từ 7.1K đánh giá) chỉ nên điền số liệu thật lấy từ trang bán hàng.

## Deploy lên Hostinger (Node.js Web App + MySQL)

Site cũ (Astro) đang tự deploy từ nhánh `main`. Bản mới nằm ở nhánh `express-mysql`. Làm theo thứ tự dưới đây để không làm sập site:

1. **Tạo database:** hPanel → Databases → **MySQL Databases** → tạo database, user và mật khẩu. Ghi lại tên database, user, mật khẩu (dạng `u123456789_...`).
2. **Đổi cấu hình app:** hPanel → Websites → buildnreview.com → **Node.js** (Deployments / Settings):
   - Framework: **Express** (hoặc "Other")
   - Entry file: **`server.js`**
   - Node version: **22.x** (hoặc 20.x)
   - Install command: `npm install`; Build command: để trống; Start command: `npm start`
3. **Biến môi trường** (Environment variables), xem mẫu ở `.env.example`:
   - `NODE_ENV=production`
   - `SITE_URL=https://buildnreview.com`
   - `DB_HOST=localhost`, `DB_PORT=3306`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`
   - `ADMIN_EMAIL`, `ADMIN_PASSWORD` (mật khẩu dài)
   - `SESSION_SECRET` (chuỗi ngẫu nhiên ≥ 24 ký tự)
4. **Đưa code lên `main`:** merge nhánh `express-mysql` vào `main` rồi push. Hostinger tự cài và khởi động.
5. Lần chạy đầu, server tự tạo bảng và nạp 24 bài mẫu (tắt bằng `AUTO_SEED=false`).
6. Vào `https://buildnreview.com/admin` đăng nhập, đổi nội dung theo ý.
7. Google Search Console: gửi `https://buildnreview.com/sitemap.xml`.

Nếu app không chạy: xem log ở hPanel. Thiếu `ADMIN_PASSWORD` hoặc `SESSION_SECRET` thì server dừng ngay và ghi rõ biến nào thiếu. Sai thông tin MySQL thì log báo lỗi kết nối.

Ảnh upload được lưu **trong MySQL** nên không bị mất khi Hostinger deploy lại.

## Cấu trúc

```
server.js                 điểm khởi động: kết nối DB, tạo bảng, nạp dữ liệu mẫu, chạy Express
src/
  app.js                  middleware, bảo mật (helmet, CSP), session admin
  config.js               đọc biến môi trường
  db/index.js             adapter MySQL / SQLite
  db/schema.js            định nghĩa bảng
  models/                 catalog (danh mục, sản phẩm), content (so sánh, guide), settings (cài đặt, ảnh)
  routes/public.js        các trang công khai, /go/ affiliate, sitemap
  routes/admin.js         trang quản trị
  lib/                    helpers, hình vẽ SVG, đăng nhập/CSRF
views/                    giao diện EJS (pages/, partials/, admin/)
public/                   CSS, JS, favicon, ảnh OG
scripts/                  migrate, seed và dữ liệu mẫu (scripts/seed/)
```

Repo: https://github.com/manhnguyenepu202-ux/Kenzon-buildnreview
