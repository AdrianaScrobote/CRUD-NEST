import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoDTO } from '../pedido/dto/pedido.dto'

@Controller('pedido')
export class PedidoController {
  constructor(private serv: PedidoService) { }

  @Get('')
  public async getAll() {
    return await this.serv.getAll();
  }

  @Post('')
  public async post(@Body() dto: PedidoDTO): Promise<PedidoDTO> {
    return this.serv.create(dto);
  }

  @Put('/:id')
  public async put(@Param('id') id, @Body() pedidoDto: PedidoDTO): Promise<PedidoDTO> {

      let pedido = await this.findOne(id)
      let date = new Date()

      pedido.createdBy = pedidoDto.createdBy
      pedido.lastChangedBy = pedidoDto.lastChangedBy
      pedido.createdAt = date

      return this.serv.create(pedido);
  }

  public async findOne(id: string): Promise<PedidoDTO> {
    return this.serv.findOne(id);
  }
}
