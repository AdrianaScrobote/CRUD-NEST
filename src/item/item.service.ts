// item.service.ts 

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../item/item.entity';
import { Repository } from 'typeorm';
import { ItemDTO } from '../item/dto/item.dto'

@Injectable()
export class ItemService {
  constructor(@InjectRepository(Item) private readonly repo: Repository<Item>) { }

  public async getAll() {
    return await this.repo.find();
  }

  public async create(dto: ItemDTO): Promise<ItemDTO> {
    return this.repo.save(dto)
  }
  
  public async findOne(id: string): Promise<ItemDTO> {
    return this.repo.findOne({where: { id, }, });
  }
}