import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDTO } from '../item/dto/item.dto'

@Controller('item')
export class ItemController {
  constructor(private serv: ItemService) { }

  @Get('')
  public async getAll() {
    return await this.serv.getAll();
  }

  @Post('')
  public async post(@Body() dto: ItemDTO): Promise<ItemDTO> {
    return this.serv.create(dto);
  }
}
