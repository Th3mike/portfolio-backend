// src/project/project.controller.ts
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; // Importando InjectModel do NestJS
import { Model } from 'mongoose'; // Importando Model do mongoose
import { ProjectService } from './project.service';
import { Project } from './schemas/project.schema'; // Importando o tipo Project

@Controller('projects')
export class ProjectController {
  constructor(
    @InjectModel('Project') private projectModel: Model<Project>, // Passando 'Project' como string
    private projectService: ProjectService,
  ) {}

  // Definindo a rota GET para buscar os projetos
  @Get()
  async findAll() {
    return this.projectService.findAll(); // Chama o método findAll do serviço
  }
}
