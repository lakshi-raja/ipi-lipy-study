import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        ipi: z
          .object({
            chapter: z.string().optional(),
            group: z.string().optional(),
            refs: z.string().optional()
          })
          .optional()
      })
    })
  })
};
