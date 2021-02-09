import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
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

  @Put('/:id')
  public async put(@Param('id') id, @Body() itemDto: ItemDTO): Promise<ItemDTO> {

      let item = await this.findOne(id)
      let date = new Date()

      item.name = itemDto.name
      item.description = itemDto.description
      item.createdBy = itemDto.createdBy
      item.lastChangedBy = itemDto.lastChangedBy
      item.lastChangedDateTime = date

      return this.serv.create(item);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string): Promise<void> {
    this.serv.delete(id);
  }

  public async findOne(id: string): Promise<ItemDTO> {
    return this.serv.findOne(id);
  }
}
