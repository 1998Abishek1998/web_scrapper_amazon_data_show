import z from '@/utils/zod';

export const DataSchema = z.object({
  data: z.object({
    label: z.string(),
    header: z.string(),
    imageUrl: z.string(),
    link: z.string(),
  }).array()
});

export type DataSchemaPayload = z.infer<typeof DataSchema>
