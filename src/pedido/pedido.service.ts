// pedido.service.ts 

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from '../pedido/pedido.entity';
import { Repository, DeleteResult } from 'typeorm';
import { PedidoDTO } from '../pedido/dto/pedido.dto'

@Injectable()
export class PedidoService {
  constructor(@InjectRepository(Pedido) private readonly repo: Repository<Pedido>) { }

  public async getAll() {
    return await this.repo.find({relations: ['itens']});
  }

  public async create(dto: PedidoDTO): Promise<PedidoDTO> {
    return this.repo.save(dto)
  }
  
  public async findOne(id: string): Promise<PedidoDTO> {
    return this.repo.findOne({where: { id, }, });
  }
}