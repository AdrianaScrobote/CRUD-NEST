// item.service.ts 

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../item/item.entity';
import { Repository, DeleteResult, getManager } from 'typeorm';
import { ItemDTO } from '../item/dto/item.dto'

@Injectable()
export class ItemService {
  constructor(@InjectRepository(Item) 
  private readonly repo: Repository<Item>
  ) { }

  public async getAll() {
    return await this.repo.find();
  }

  public async getAllTreeItem() {
    const manager = getManager();

    const itens = await manager.getTreeRepository(Item).findTrees();

    const ids  = itens.map(i => i.id) 
    return ids
  }

  public async create(dto: ItemDTO): Promise<ItemDTO> {
    return this.repo.save(dto)
  }

  public async delete(id: string): Promise<DeleteResult> {
    return this.repo.delete(id)
  }
  
  public async findOne(id: string): Promise<ItemDTO> {
    return this.repo.findOne({where: { id, }, });
  }
}