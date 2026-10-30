// Tạo public/og.png (1200×630) cho ảnh chia sẻ mạng xã hội. Chạy: npm run og
import sharp from 'sharp';

const ticks = Array.from({ length: 21 }, (_, i) => {
  const x = 120 + i * 48;
  return `<line x1="${x}" x2="${x}" y1="${i % 2 ? 488 : 470}" y2="500" stroke="${i % 2 ? '#6f84a3' : '#f3f6fa'}" stroke-width="3"/>`;
}).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="2"/></pattern></defs>
  <rect width="1200" height="630" fill="#10284a"/><rect width="1200" height="630" fill="url(#g)"/>
  <rect x="120" y="110" width="72" height="72" rx="14" fill="#f3f6fa"/>
  <path d="M134 164h44" stroke="#10284a" stroke-width="4.4" stroke-linecap="round"/>
  <path d="M140 164v-12M150 164v-18M160 164v-24M170 164v-32" stroke="#f26a1b" stroke-width="5.2" stroke-linecap="round"/>
  <text x="216" y="164" font-family="Arial Black, Arial, sans-serif" font-size="46" font-weight="900" fill="#f3f6fa">BuildNReview</text>
  <text x="120" y="320" font-family="Arial Black, Arial, sans-serif" font-size="72" font-weight="900" fill="#f3f6fa">Thử kỹ trước khi bạn mua.</text>
  <text x="120" y="390" font-family="Arial, sans-serif" font-size="32" fill="#a9b8cc">Review máy in 3D, dụng cụ và đồ gia dụng</text>
  <rect x="120" y="473" width="864" height="16" fill="#f26a1b"/>
  ${ticks}
  <line x1="120" x2="1080" y1="500" y2="500" stroke="#f3f6fa" stroke-width="4"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('public/og.png');
