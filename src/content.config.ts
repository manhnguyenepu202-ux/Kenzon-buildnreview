import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * products/<slug>.yaml  — dữ liệu dùng chung cho mọi ngôn ngữ (điểm, thông số, giá, link affiliate).
 * reviews/<lang>/<slug>.md — phần chữ của bài review theo từng ngôn ngữ.
 */
const products = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    brand: z.string(),
    model: z.string(),
    category: z.enum(['3d-printers', 'tools', 'home']),
    type: z.string(),
    // true = dữ liệu mẫu, trang review sẽ hiện thông báo. Đặt false khi đã tự kiểm chứng.
    sample: z.boolean().default(true),
    released: z.number(),
    tone: z.string().default('#2F6FB0'),
    // Lượt đọc trong tuần; dùng để xếp mục "Đọc nhiều tuần này".
    views: z.number().default(0),
    scores: z.object({
      performance: z.number().min(0).max(10),
      quality: z.number().min(0).max(10),
      ease: z.number().min(0).max(10),
      value: z.number().min(0).max(10),
    }),
    price: z.object({ vnd: z.number(), usd: z.number() }),
    specs: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])),
    offers: z
      .array(
        z.object({
          store: z.string(),
          url: z.string(),
          lang: z.enum(['vi', 'en', 'all']).default('all'),
        }),
      )
      .default([]),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    verdict: z.string(),
    bestFor: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('BuildNReview'),
  }),
});

export const collections = { products, reviews };
