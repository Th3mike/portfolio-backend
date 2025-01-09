// src/project/project.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Project, ProjectSchema } from './schemas/project.schema';

@Module({
  imports: [
    // Registrando o modelo com o nome como string
    MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }]), // Usando 'Project' como string
  ],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
