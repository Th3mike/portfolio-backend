import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), // Conexão com MongoDB Atlas
    ProjectModule, // Módulo dos projetos
  ],
})
export class AppModule {}
