import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    technologies: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
