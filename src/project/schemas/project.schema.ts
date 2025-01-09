// src/project/schemas/project.schema.ts
import { Schema, Document } from 'mongoose';

// Definindo o schema
export const ProjectSchema = new Schema({
  titlePT: { type: String, required: true },
  titleEN: { type: String, required: true },
  descriptionPT: { type: String, required: true },
  descriptionEN: { type: String, required: true },
  link: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

// Definindo a interface Project
export interface Project extends Document {
  titlePT: string;
  titleEN: string;
  descriptionPT: string;
  descriptionEN: string;
  link: string;
  createdAt: Date;
}
