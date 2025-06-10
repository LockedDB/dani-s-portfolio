import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const articles = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*.mdx"],
    base: "./src/content/articles",
  }),
  schema: ({ image }) =>
    z.object({
      cover: image(),
      coverAlt: z.string(),
      title: z.string(),
      slug: z.string(),
      snippet: z.string(),
      category: z.string(),
      pubDate: z.coerce.date(),
      readingDuration: z.number(),
      originalLink: z.string().url(),
      isDraft: z.boolean().default(false),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default("Retro Rocket Team"),
      relatedArticles: z.array(reference("articles")).optional(),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*.mdx"],
    base: "./src/content/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      technologies: z.array(z.string()).optional(),
      year: z.string().optional(),
      company: z.string().optional(),
      isDraft: z.boolean().default(false),
    }),
});

export const collections = { articles, projects };
