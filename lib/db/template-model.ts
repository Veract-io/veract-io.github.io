import mongoose, { Schema, InferSchemaType } from "mongoose";

const Version = new Schema({
  mjml: { type: String, required: true },        // saved source
  html: { type: String, required: true },        // compiled output
  json: { type: Schema.Types.Mixed, default: {} }, // GrapesJS project
  variables: [String],
  note: String,
}, { timestamps: true });

const Template = new Schema({
  name: { type: String, required: true },
  tags: [String],
  currentVersion: { type: Number, default: 0 },
  versions: { type: [Version], default: [] },
}, { timestamps: true });

export type TemplateDoc = InferSchemaType<typeof Template> & { _id: string };
export default (mongoose.models.EmailTemplate ??
  mongoose.model("EmailTemplate", Template)) as mongoose.Model<TemplateDoc>;
