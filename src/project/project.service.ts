import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './schemas/project.schema'; // Importando corretamente o tipo Project

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel('Project') private projectModel: Model<Project>, // Corrigido para 'Project'
  ) {}

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

  // Alterado para 'findByIdAndDelete'
  async delete(id: string): Promise<void> {
    await this.projectModel.findByIdAndDelete(id).exec();
  }

  async create(createProjectDto: any): Promise<Project> {
    const createdProject = new this.projectModel(createProjectDto);
    return createdProject.save();
  }
}
