// pedido.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Pedido } from '../pedido/pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido])],
  providers: [PedidoService],
  controllers: [PedidoController],
  exports: []
})
export class PedidoModule { }