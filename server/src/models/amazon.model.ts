import * as mongoose from 'mongoose';

const amazonSchema = new mongoose.Schema(
  {
    header: { type: String, required: false },
    label: { type: String, required: false },
    imageUrl: { type: String, required: false },
    link: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export type AmazonData = mongoose.InferSchemaType<typeof amazonSchema>;
export const AmazonData = mongoose.model('AmazonData', amazonSchema);
