// fornecedor.service.ts 

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fornecedor } from '../fornecedor/fornecedor.entity';
import { Repository, DeleteResult } from 'typeorm';
import { FornecedorDTO } from '../fornecedor/dto/fornecedor.dto'

@Injectable()
export class FornecedorService {
  constructor(@InjectRepository(Fornecedor) private readonly repo: Repository<Fornecedor>) { }

  public async getAll() {
    return await this.repo.find();
  }

  public async create(dto: FornecedorDTO): Promise<FornecedorDTO> {
    return this.repo.save(dto)
  }
  
  public async findOne(id: string): Promise<FornecedorDTO> {
    return this.repo.findOne({where: { id, }, });
  }
}