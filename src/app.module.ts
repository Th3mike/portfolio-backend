import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://bunikeporty:nQbIJjLr1ikOJrXe@cluster0.3xgi3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"), // Conexão com MongoDB Atlas
    ProjectModule, // Módulo dos projetos
  ],
})
export class AppModule {}
