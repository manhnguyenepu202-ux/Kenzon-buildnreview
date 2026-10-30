// Mini PCs: GMKtec. Researched October 2026.
// Prices and images: official store (gmktec.com), 30 Oct 2026.
// Benchmarks: the independent reviews listed in each article's Sources section.
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const gmk = (handle) => awin(45751, `https://www.gmktec.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0715/1314/5498/files/${file}`;
const DATE = '2026-10-30 09:00:00';

export default {
  categories: [
    {
      slug: 'mini-pcs', name: 'Mini PCs', group_name: 'Tech', sort_order: 7, art_type: 'mini-pc', tone: '#1e88e5',
      blurb: 'Small desktop computers for home offices, local AI, light gaming and 3D-printing workstations, scored on performance, noise, ports and value.',
      score_labels: { performance: 'Performance', quality: 'Build, cooling and noise', ease: 'Ports and upgradability', value: 'Value' },
      sponsor: 'gmktec-k8-plus',
    },
  ],

  products: [
    {
      slug: 'gmktec-evo-x2',
      name: 'GMKtec EVO-X2',
      brand: 'GMKtec',
      model: 'EVO-X2 (Ryzen AI Max+ 395)',
      category: 'mini-pcs',
      art_type: 'mini-pc',
      tone: '#1565c0',
      released: 2025,
      price_usd: 2199.99,
      featured: true,
      image_url: cdn('3236633c9c3cf624fc617d8ceea1246c_28049231-bded-49ff-915d-3fd6ae59ddef.png?v=1784801458'),
      gallery: [
        cdn('a070d62d561600eda2d1d74a32339114.avif?v=1785427450'),
        cdn('6827ac5e291f0fb761fb5d7ef7bfe734.avif?v=1785427455'),
        cdn('2cc7c66542b72c79abada64dc18b64c1.avif?v=1785427462'),
      ],
      affiliate_url: gmk('amd-ryzen™-ai-max-395-evo-x2-ai-mini-pc'),
      affiliate_label: 'Check price at GMKtec',
      title: 'GMKtec EVO-X2 review: a desktop-sized local AI machine for the price of a gaming laptop',
      summary: 'Ryzen AI Max+ 395 with up to 128 GB of unified memory runs 70B language models at home. Quiet at idle, ordinary value as a gaming PC.',
      verdict: 'The EVO-X2 is one of the cheapest ways to run big language models locally: with 128 GB of unified memory the GPU can use more than 50 GB, enough for a 70B model. ServeTheHome measured idle power of 8–14 W and 41–43 dBA under AI load. As a plain desktop or gaming PC it is expensive, and serviceability could be better. Buy it for AI, not for Steam.',
      best_for: 'Running large local AI models on your desk',
      pros: [
        'Up to 128 GB unified LPDDR5X: the GPU can address more than 50 GB',
        'Ran Llama 3.3 70B fully on the GPU at 3.7–3.8 tokens/s; Qwen3-32B at about 10.5 tokens/s',
        'Low idle power (8–14 W) and quiet at idle (37–38 dBA)',
        'Two USB4 ports, HDMI 2.1, DisplayPort, Wi-Fi 7, SD reader',
        'Gaming between a desktop RTX 4060 and a laptop RTX 4070',
      ],
      cons: [
        'Expensive as a general desktop or gaming PC',
        'Only one 2.5GbE port, no 10GbE',
        'Screws hidden under the feet; Wi-Fi card hard to service',
        'Gets audible under load: 43–44 dBA while gaming',
      ],
      specs: [
        { label: 'CPU', value: 'AMD Ryzen AI Max+ 395, 16 cores / 32 threads' },
        { label: 'GPU', value: 'Radeon 8060S, 40 CUs (RDNA 3.5)' },
        { label: 'Memory', value: '64 GB or 128 GB LPDDR5X (soldered, unified)' },
        { label: 'Storage', value: '1–2 TB NVMe, two M.2 slots' },
        { label: 'Front ports', value: 'USB4, 2× USB-A 3.2 Gen 2, SD card, audio' },
        { label: 'Rear ports', value: 'USB4, USB-A 3.2 Gen 2, USB 2.0, HDMI 2.1, DisplayPort, 2.5GbE' },
        { label: 'Wireless', value: 'Wi-Fi 7, Bluetooth' },
        { label: 'Power adapter', value: '230 W' },
        { label: 'Price', value: '64 GB/1 TB $2,199.99 · 128 GB/1 TB $3,499.99 · 128 GB/2 TB $3,649.99' },
      ],
      scores: { performance: 9.3, quality: 7.9, ease: 8.1, value: 8.0 },
      body: `## What is it?

The EVO-X2 is built around AMD’s Ryzen AI Max+ 395, nicknamed “Strix Halo”: 16 Zen 5 cores, a 40-CU Radeon 8060S graphics chip and up to 128 GB of fast LPDDR5X memory shared between CPU and GPU. That shared memory is the whole point. A normal graphics card has 8–24 GB of VRAM; here the GPU can use more than 50 GB, which is what large language models need.

GMKtec sells the 64 GB / 1 TB model for **$2,199.99** and the 128 GB / 1 TB model for **$3,499.99** at the time of writing.

## Who it is for

Developers and tinkerers who want to run models like Llama 70B or Qwen 32B privately at home, without paying for cloud GPUs or a $10,000 workstation. If that is not you, keep reading the K8 Plus review instead.

## Ports and build

ServeTheHome lists, at the front, a USB4 port, two USB 3.2 Gen 2 Type-A ports, an SD card reader and a headset jack, plus a performance-mode button. At the back are a second USB4 port, HDMI 2.1, DisplayPort, USB-A, USB 2.0 and a single 2.5GbE port. Wi-Fi 7 is built in.

Inside there are two M.2 slots, two blower fans and an RGB fan. The reviewer was not a fan of the layout: screws sit under the rubber feet, the Wi-Fi card is buried under an M.2 slot, and the top section is hard to service.

## Local AI results

This is where the EVO-X2 earns its price. ServeTheHome’s 128 GB unit ran:

| Model | Setup | Speed |
|---|---|---|
| Llama 3.3 70B Q6_K | CPU only | about 2 tokens/s |
| Llama 3.3 70B Q6_K | Fully on GPU (over 50 GB) | 3.7–3.8 tokens/s |
| Qwen3-32B | GPU | about 10.5 tokens/s |

GMKtec’s own page claims much higher numbers for mixture-of-experts models (55 tokens/s for Qwen3 30B, 19 tokens/s for GPT-OSS 120B). Those are vendor figures with no test method, but they are plausible because MoE models only activate part of their weights. The practical takeaway: 30B-class models feel interactive, dense 70B models are slow but usable.

## Gaming

ServeTheHome placed gaming performance between a desktop RTX 4060 and a laptop RTX 4070, with Counter-Strike 2 around 120 fps at 4K. That is impressive for integrated graphics, but the reviewer was clear: you would not buy this as a gaming PC at this price.

## Power and noise

| State | Power | Noise |
|---|---|---|
| Idle | 8–14 W | 37–38 dBA (34 dBA room) |
| Llama 70B inference | 147–160 W | 41–43 dBA |
| Gaming | 170–180 W | 43–44 dBA |

Quiet at idle, noticeable under load. The reviewer wished it were a little quieter.

## EVO-X2 vs the rivals

- **vs Framework Desktop:** the same Ryzen AI Max+ 395 chip in a more repairable case. Compare current prices.
- **vs Apple Mac Studio:** ServeTheHome compares it with a 512 GB M3 Ultra Mac Studio at around $10,000: more capacity, at a much higher price.
- **vs NVIDIA GB10 systems:** 128 GB machines quoted from about $3,000, with NVIDIA’s CUDA software stack.
- **vs GMKtec K8 Plus ($919.99):** for office work, light gaming and 3D-printing slicing, the K8 Plus does the job for less than half the price. See [EVO-X2 vs K8 Plus](/en/compare/gmktec-evo-x2-vs-gmktec-k8-plus/).

## Price and value

As ServeTheHome put it, about $2,000 feels like a lot for a basic desktop, but from an AI perspective it is a really strong system. We agree. Buy the 128 GB model if AI is the reason you are here; the 64 GB model limits you to smaller models.

## Final thoughts

The EVO-X2 makes local 70B-class AI affordable and quiet enough for a desk. It is not perfect to work on, and it is not good value for gaming, but for its real job there is very little competition at the price.

## Sources

- [ServeTheHome: GMKtec EVO-X2 review, an AMD Ryzen AI Max+ 395 powerhouse](https://www.servethehome.com/gmktec-evo-x2-review-an-amd-ryzen-ai-max-395-powerhouse/) (pages 1–4: ports, internals, AI, gaming, power and noise)
- [GMKtec official store: EVO-X2](https://www.gmktec.com/products/amd-ryzen%E2%84%A2-ai-max-395-evo-x2-ai-mini-pc) (price and vendor AI benchmarks)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'gmktec-k8-plus',
      name: 'GMKtec K8 Plus',
      brand: 'GMKtec',
      model: 'NucBox K8 Plus (Ryzen 7 8845HS)',
      category: 'mini-pcs',
      art_type: 'mini-pc',
      tone: '#42a5f5',
      released: 2024,
      price_usd: 919.99,
      featured: true,
      image_url: cdn('k8plus.jpg?v=1784801263'),
      gallery: [
        cdn('2_90ab4af8-4b59-4acd-bfa9-b12b756904c3.jpg?v=1784801264'),
        cdn('9.jpg?v=1784801264'),
        cdn('10_25ac431c-6e34-4aaf-8c82-d71e7afccd92.jpg?v=1784801264'),
      ],
      affiliate_url: gmk('gmktec-nucbox-k8-plus-mini-pc-amd-ryzen™-7-8845hs'),
      affiliate_label: 'Check price at GMKtec',
      title: 'GMKtec K8 Plus review: the all-rounder mini PC with an OCuLink escape hatch',
      summary: 'Ryzen 7 8845HS, Radeon 780M, USB4, dual 2.5GbE and an OCuLink port for an external GPU. Quiet day to day, louder in Performance mode.',
      verdict: 'The K8 Plus is the mini PC we would recommend to most people: fast enough for office work, photo editing, slicing big 3D prints and light gaming, with an OCuLink port that lets you add a desktop graphics card later. It is quiet at light load; in Performance mode the fan gets loud without much extra speed. The barebone version at $409.99 is a bargain if you have RAM and an SSD.',
      best_for: 'Home office, 3D-printing workstation and light gaming',
      pros: [
        'Ryzen 7 8845HS (8 cores / 16 threads) with Radeon 780M graphics',
        'OCuLink PCIe 4.0 port for an external GPU dock, plus USB4',
        'Dual 2.5GbE, Wi-Fi 6, HDMI 2.1',
        'Upgradable: barebone option means RAM and SSD are user-installed',
        'Barebone from $409.99; 32 GB / 1 TB for $919.99',
      ],
      cons: [
        'Performance mode is noticeably louder for little gain',
        'One tester measured 45–48 dB under sustained load',
        'Some owners report fan noise; a spacer fix circulates online',
        'Integrated graphics are fine for esports, not for new AAA games at high settings',
      ],
      specs: [
        { label: 'CPU', value: 'AMD Ryzen 7 8845HS, 8 cores / 16 threads, up to 5.1 GHz' },
        { label: 'GPU', value: 'Radeon 780M (integrated)' },
        { label: 'Memory', value: 'DDR5-5600, 32 GB (2 × 16 GB) in the configured model' },
        { label: 'Storage', value: '1 TB PCIe 4.0 NVMe (configured model)' },
        { label: 'Expansion', value: 'OCuLink PCIe 4.0, USB4' },
        { label: 'Network', value: 'Dual 2.5GbE, Wi-Fi 6, Bluetooth 5.2' },
        { label: 'Video', value: 'HDMI 2.1, USB4' },
        { label: 'Price', value: 'Barebone $409.99 · 32 GB / 1 TB $919.99' },
      ],
      scores: { performance: 8.4, quality: 7.8, ease: 9.1, value: 9.0 },
      body: `## What is it?

The K8 Plus is GMKtec’s popular mid-range mini PC: an AMD Ryzen 7 8845HS laptop chip in a box about the size of a sandwich, with an unusually generous set of ports. Its party trick is **OCuLink**, a direct PCIe 4.0 connection for an external graphics dock, so the same little PC can become a proper gaming or AI machine later.

You can buy it as a **barebone for $409.99** (no RAM, SSD or Windows) or with **32 GB of RAM and a 1 TB SSD for $919.99** at the time of writing.

## Technical overview

- **CPU:** 8 cores, 16 threads, up to 5.1 GHz.
- **Graphics:** Radeon 780M, one of the strongest integrated GPUs in its generation.
- **Memory:** DDR5-5600. The configured model ships with two 16 GB modules, and the barebone option confirms RAM and SSD are user-installable.
- **Ports:** OCuLink, USB4, HDMI 2.1, dual 2.5GbE, Wi-Fi 6.

## Performance

Japanese site PC Watch found it faster than a Ryzen 9 PRO 6950H machine, a high-end chip from two generations earlier. For a 3D-printing workstation that means large slicer projects, CAD and mesh repair are comfortable. The Radeon 780M handles esports titles and older games at 1080p; for modern AAA games at high settings, OCuLink plus a desktop GPU is the upgrade path.

## Noise and power

This is where the reviews differ, so here is what each one found:

- **Team Pandory:** the fan only ramps up when TDP is raised to 65 W under stress tests, with power peaking around 83 W and modest noise.
- **ETA Prime:** Performance mode gave noticeable fan noise without substantial performance gains.
- **Vivid Repairs:** measured 45–48 dB under sustained load.
- **Owners (via minipc-review.com):** some report an annoying fan noise, and fitting spacers between the fan and the RAM fixed it for some.

Our reading: leave it in Balanced mode. It stays quiet for everyday work, and the extra noise in Performance mode doesn’t buy much speed.

## K8 Plus vs the rivals

- **vs GMKtec EVO-X2 ($2,199.99):** in a different league for AI and graphics, at more than twice the price. See [EVO-X2 vs K8 Plus](/en/compare/gmktec-evo-x2-vs-gmktec-k8-plus/).
- **vs Beelink SER8:** the same Ryzen 7 8845HS. Check which ports matter to you, especially OCuLink and dual LAN.
- **vs Apple Mac mini (M4):** quieter and very efficient, but no OCuLink, no RAM upgrades and macOS only.

## Price and value

The configured model at $919.99 is fair. The barebone at $409.99 is the real deal if you have spare DDR5 SO-DIMMs and an NVMe drive, or don’t mind buying them separately.

## Final thoughts

The K8 Plus is a sensible, fast, flexible mini PC. Keep it in Balanced mode, and it is quiet enough for a desk. The OCuLink port means it can grow with you instead of being replaced.

## Sources

- [TechRadar: GMKtec NucBox K8 Plus review](https://www.techradar.com/computing/gmktec-nucbox-k8-plus-mini-pc-review)
- [Team Pandory: GMKtec NucBox K8 Plus review](https://teampandory.com/2024/11/13/gmktec-nucbox-k8-plus-review-incredible-performance-and-value-from-389-%f0%9f%92%aa)
- [Vivid Repairs: K8 Plus review](https://www.vividrepairs.co.uk/gmktec-k8-plus-ryzen-7-8845hs-mini-pc-review)
- [minipc-review.com: K8 Plus review](https://minipc-review.com/en/gmktec-k8-plus-mini-pc-review-with-amd-r7-8845hs)
- [PC Watch (Japanese): K8 Plus](https://pc.watch.impress.co.jp/docs/column/nishikawa/1638418.html)
- [GMKtec official store: K8 Plus](https://www.gmktec.com/products/gmktec-nucbox-k8-plus-mini-pc-amd-ryzen%E2%84%A2-7-8845hs) (price and configurations)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'gmktec-evo-x2-vs-gmktec-k8-plus',
      title: 'GMKtec EVO-X2 vs K8 Plus: do you need the AI powerhouse?',
      products: ['gmktec-evo-x2', 'gmktec-k8-plus'],
      intro: 'GMKtec’s two most talked-about mini PCs. The EVO-X2 is built for local AI with up to 128 GB of unified memory; the K8 Plus is an affordable all-rounder with an OCuLink port.',
      verdict: 'Buy the EVO-X2 only if you want to run large language models (30B to 70B) locally: nothing at this price matches its GPU memory. For everything else, from office work and photo editing to slicing 3D prints and esports gaming, the K8 Plus does the job for less than half the money, and OCuLink lets you add a graphics card later.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-mini-pcs',
      title: 'The best mini PCs of 2026',
      category: 'mini-pcs',
      intro: 'Small desktops we would buy for a home office, a 3D-printing workstation or local AI, based on independent benchmarks, noise measurements and owner reports. Prices are official store prices on 30 October 2026.',
      items: [
        { slug: 'gmktec-k8-plus', award: 'Best all-rounder', note: 'Ryzen 7 8845HS, OCuLink and dual 2.5GbE from $409.99 barebone.' },
        { slug: 'gmktec-evo-x2', award: 'Best for local AI', note: 'Up to 128 GB unified memory runs 70B models at home.' },
      ],
      updated_at: DATE,
    },
  ],
};
