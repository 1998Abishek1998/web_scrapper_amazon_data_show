import mongoose from 'mongoose';
import { env } from './env';

async function dbConnect() {
  await mongoose.connect(env.DATABASE_URL);
}
export default dbConnect
