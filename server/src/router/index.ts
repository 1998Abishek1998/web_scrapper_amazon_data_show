import { createAmazonData, deleteAllAmazonData, fetchAmazonData } from '@/handlers/data-handler';
import { DataSchema } from '@/schema/data-schema';
import { validateSchema } from '@/schema/validate-schema';
import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';

const router = new Hono()

router.get('/api/hi', fetchAmazonData)
router.post('/api/postData', zValidator("json", DataSchema, validateSchema), createAmazonData)
router.put('/api/deleteAll', deleteAllAmazonData)

export default router
export type Routers = typeof router
