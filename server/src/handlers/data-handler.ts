import { env } from '@/config/env';
import { AmazonData } from '@/models/amazon.model';
import type { DataSchemaPayload } from '@/schema/data-schema';
import type { Context } from 'hono';
import mongoose from 'mongoose';

export const createAmazonData = async (c: Context) => {
  const body: DataSchemaPayload = await c.req.json()
  const db = await mongoose.connect(env.DATABASE_URL)
  const session = await db.startSession();
  try {

    body.data.map(async (itm: { header: any; label: any; imageUrl: any; link: any; }) => {
      const data = new AmazonData({
        header: itm.header,
        label: itm.label,
        imageUrl: itm.imageUrl,
        link: itm.link
      })
      await data.save()
    })

    session.commitTransaction()
  } catch (error) {
    console.log(error)
    return c.json({ error: true, message: "Transaction Error.", errors: error }, 400)
  }
  session.endSession()

  return c.json({ error: false, message: "Successfully uploaded data" }, 200);
}


export const fetchAmazonData = async (c: Context) => {
  const data = await AmazonData.find()

  return c.json({ error: false, message: "Successfully fetched data", data }, 200);
}


export const deleteAllAmazonData = async (c: Context) => {
  const data = await AmazonData.deleteMany({})
  return c.json({ error: false, message: "Successfully deleted data", data }, 200);
}
