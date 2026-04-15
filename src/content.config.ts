import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    image: z.string(),
    author: z.string().default('Julia Salim'),
    authorImage: z.string().default('/images/blog/author-julia.webp'),
    category: z.enum(['Pentest', 'Segurança', 'Entendendo o pentest', 'Labs']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
