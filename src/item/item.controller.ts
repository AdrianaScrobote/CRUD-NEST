import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private serv: ItemService) { }

  @Get('')
  public async getAll() {
    console.log("chegueiiiiii")
    return await this.serv.getAll();
  }
}
