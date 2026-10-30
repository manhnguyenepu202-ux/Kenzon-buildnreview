export const languages = { vi: 'Tiếng Việt', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'vi';

type Dict = Record<string, string>;

const ui: Record<Lang, Dict> = {
  vi: {
    'site.tagline': 'Review, so sánh và chấm điểm máy in 3D, dụng cụ và đồ gia dụng.',
    'nav.categories': 'Danh mục',
    'nav.compare': 'So sánh',
    'nav.howWeTest': 'Cách chấm điểm',
    'nav.skip': 'Bỏ qua tới nội dung',
    'nav.menu': 'Menu',
    'search.placeholder': 'Tìm theo hãng hoặc model…',
    'search.heroPlaceholder': 'Tìm trong {n} sản phẩm theo hãng, model hoặc loại máy',
    'search.label': 'Tìm sản phẩm',
    'search.submit': 'Tìm',
    'search.title': 'Kết quả tìm kiếm',
    'search.resultsFor': '{n} kết quả cho “{q}”',
    'search.empty': 'Không có sản phẩm khớp với “{q}”. Thử tên hãng (Bambu, Makita) hoặc loại máy (nồi chiên, máy khoan).',
    'search.prompt': 'Nhập tên hãng, model hoặc loại máy để bắt đầu.',
    'search.seeAll': 'Xem tất cả kết quả',
    'search.try': 'Hay được tìm',
    'home.title': 'Thử kỹ trước khi bạn mua.',
    'home.lead': 'Mỗi sản phẩm được chấm trên cùng một thước đo: hiệu năng, độ hoàn thiện, độ dễ dùng và giá trị. Đọc ưu nhược điểm, xem thông số và đặt các máy cạnh nhau trước khi chi tiền.',
    'home.sheet': 'Phiếu chấm',
    'home.sheetTop': 'Điểm cao nhất tuần này',
    'home.mostRead': 'Đọc nhiều tuần này',
    'home.mostReadLead': 'Những bài review được mở nhiều nhất trong bảy ngày qua.',
    'home.matchups': 'Đối đầu',
    'home.matchupsLead': 'Hai máy, cùng một bài kiểm tra. Xem máy nào hợp với bạn.',
    'home.process': 'Một thước đo cho mọi sản phẩm',
    'home.browse': 'Duyệt theo danh mục',
    'card.read': 'Đọc review',
    'card.score': 'Điểm BuildNReview',
    'score.outOf': 'trên 10',
    'score.overall': 'Điểm tổng',
    'review.pros': 'Điểm cộng',
    'review.cons': 'Điểm trừ',
    'review.verdict': 'Kết luận',
    'review.bestFor': 'Hợp với',
    'review.specs': 'Thông số kỹ thuật',
    'review.scores': 'Điểm chi tiết',
    'review.related': 'Cùng danh mục',
    'review.price': 'Giá tham khảo',
    'review.buyAt': 'Xem giá tại {store}',
    'review.updated': 'Cập nhật {date}',
    'review.by': 'Bởi {author}',
    'review.sample': 'Đây là bài mẫu để dựng giao diện. Điểm số, thông số và nội dung chưa được kiểm chứng, hãy thay bằng đánh giá thực tế trước khi xuất bản.',
    'review.affiliate': 'Một số liên kết là liên kết tiếp thị: chúng tôi có thể nhận hoa hồng khi bạn mua, giá của bạn không đổi.',
    'compare.add': 'Thêm vào so sánh',
    'compare.added': 'Đã thêm vào so sánh',
    'compare.remove': 'Bỏ khỏi so sánh',
    'compare.title': 'So sánh sản phẩm',
    'compare.lead': 'Chọn tối đa 3 sản phẩm cùng danh mục để xem điểm và thông số cạnh nhau. Dòng khác nhau được tô sáng.',
    'compare.pick': 'Chọn sản phẩm',
    'compare.pickCategory': 'Danh mục',
    'compare.empty': 'Chưa có sản phẩm nào. Chọn sản phẩm ở trên hoặc bấm “Thêm vào so sánh” trong một bài review.',
    'compare.go': 'So sánh ngay',
    'compare.tray': '{n}/3 sản phẩm để so sánh',
    'compare.clear': 'Xóa hết',
    'compare.full': 'Đã đủ 3 sản phẩm. Bỏ bớt một sản phẩm để thêm mới.',
    'compare.otherCategory': 'Chỉ so sánh được sản phẩm cùng danh mục. Danh sách đã được làm mới.',
    'compare.onlyDiff': 'Chỉ hiện dòng khác nhau',
    'compare.winner': 'Điểm cao hơn',
    'compare.vs': 'đối đầu',
    'compare.verdict': 'Nên chọn máy nào?',
    'compare.openTool': 'Mở công cụ so sánh',
    'category.count': '{n} sản phẩm',
    'category.sort': 'Sắp xếp',
    'category.sortScore': 'Điểm cao nhất',
    'category.sortPriceAsc': 'Giá thấp đến cao',
    'category.sortPriceDesc': 'Giá cao đến thấp',
    'category.sortNew': 'Mới ra mắt',
    'category.type': 'Loại',
    'category.all': 'Tất cả',
    'footer.about': 'BuildNReview chấm điểm sản phẩm bằng một thước đo công khai và cập nhật khi giá hoặc phiên bản thay đổi.',
    'footer.disclosure': 'Công bố liên kết tiếp thị',
    'footer.rights': 'Bảo lưu mọi quyền.',
    'yes': 'Có',
    'no': 'Không',
    'breadcrumb.home': 'Trang chủ',
    '404.title': 'Không tìm thấy trang',
    '404.lead': 'Đường dẫn này không tồn tại hoặc đã được đổi. Thử tìm sản phẩm bạn cần.',
    '404.home': 'Về trang chủ',
  },
  en: {
    'site.tagline': 'Reviews, comparisons and scores for 3D printers, tools and home appliances.',
    'nav.categories': 'Categories',
    'nav.compare': 'Compare',
    'nav.howWeTest': 'How we score',
    'nav.skip': 'Skip to content',
    'nav.menu': 'Menu',
    'search.placeholder': 'Search by brand or model…',
    'search.heroPlaceholder': 'Search {n} products by brand, model or product type',
    'search.label': 'Search products',
    'search.submit': 'Search',
    'search.title': 'Search results',
    'search.resultsFor': '{n} results for “{q}”',
    'search.empty': 'Nothing matches “{q}”. Try a brand (Bambu, Makita) or a product type (air fryer, drill).',
    'search.prompt': 'Type a brand, model or product type to start.',
    'search.seeAll': 'See all results',
    'search.try': 'Popular searches',
    'home.title': 'Test it hard before you buy it.',
    'home.lead': 'Every product is scored on the same scale: performance, build quality, ease of use and value. Read the pros and cons, check the specs and line products up side by side before you spend.',
    'home.sheet': 'Score sheet',
    'home.sheetTop': 'Top score this week',
    'home.mostRead': 'Most read this week',
    'home.mostReadLead': 'The reviews opened most often in the last seven days.',
    'home.matchups': 'Head to head',
    'home.matchupsLead': 'Two machines, one set of tests. See which one fits you.',
    'home.process': 'One scale for every product',
    'home.browse': 'Browse by category',
    'card.read': 'Read review',
    'card.score': 'BuildNReview score',
    'score.outOf': 'out of 10',
    'score.overall': 'Overall',
    'review.pros': 'What we like',
    'review.cons': 'What we don’t',
    'review.verdict': 'Verdict',
    'review.bestFor': 'Best for',
    'review.specs': 'Specifications',
    'review.scores': 'Score breakdown',
    'review.related': 'More in this category',
    'review.price': 'Typical price',
    'review.buyAt': 'Check price at {store}',
    'review.updated': 'Updated {date}',
    'review.by': 'By {author}',
    'review.sample': 'This is a sample review used to build the layout. Scores, specs and text are unverified; replace them with real testing before publishing.',
    'review.affiliate': 'Some links are affiliate links: we may earn a commission when you buy, at no extra cost to you.',
    'compare.add': 'Add to compare',
    'compare.added': 'Added to compare',
    'compare.remove': 'Remove from compare',
    'compare.title': 'Compare products',
    'compare.lead': 'Pick up to 3 products from the same category to see scores and specs side by side. Rows that differ are highlighted.',
    'compare.pick': 'Choose a product',
    'compare.pickCategory': 'Category',
    'compare.empty': 'Nothing to compare yet. Choose products above, or use “Add to compare” on any review.',
    'compare.go': 'Compare now',
    'compare.tray': '{n}/3 products to compare',
    'compare.clear': 'Clear all',
    'compare.full': 'You already have 3 products. Remove one to add another.',
    'compare.otherCategory': 'Only products from the same category can be compared. The list was reset.',
    'compare.onlyDiff': 'Show differences only',
    'compare.winner': 'Higher score',
    'compare.vs': 'vs',
    'compare.verdict': 'Which one should you buy?',
    'compare.openTool': 'Open the comparison tool',
    'category.count': '{n} products',
    'category.sort': 'Sort by',
    'category.sortScore': 'Highest score',
    'category.sortPriceAsc': 'Price: low to high',
    'category.sortPriceDesc': 'Price: high to low',
    'category.sortNew': 'Newest',
    'category.type': 'Type',
    'category.all': 'All',
    'footer.about': 'BuildNReview scores products on a published scale and updates reviews when prices or versions change.',
    'footer.disclosure': 'Affiliate disclosure',
    'footer.rights': 'All rights reserved.',
    'yes': 'Yes',
    'no': 'No',
    'breadcrumb.home': 'Home',
    '404.title': 'Page not found',
    '404.lead': 'This link doesn’t exist or has moved. Try searching for the product you need.',
    '404.home': 'Back to home',
  },
};

export function useT(lang: Lang) {
  return (key: string, vars: Record<string, string | number> = {}) => {
    let s = ui[lang][key] ?? ui.en[key] ?? key;
    for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
    return s;
  };
}

export function isLang(x: string | undefined): x is Lang {
  return !!x && x in languages;
}

/** Đổi tiền tố ngôn ngữ của một đường dẫn: /vi/review/x/ -> /en/review/x/ */
export function swapLang(path: string, to: Lang) {
  const parts = path.split('/');
  if (isLang(parts[1])) parts[1] = to;
  else parts.splice(1, 0, to);
  return parts.join('/') || `/${to}/`;
}

export function formatPrice(lang: Lang, price: { vnd: number; usd: number }) {
  return lang === 'vi'
    ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(price.vnd)
    : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price.usd);
}

export function formatDate(lang: Lang, d: Date) {
  return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-US', { dateStyle: 'long' }).format(d);
}

export const staticPaths = () => langs.map((lang) => ({ params: { lang } }));
