// fornecedor.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FornecedorService } from './fornecedor.service';
import { FornecedorController } from './fornecedor.controller';
import { Fornecedor } from '../fornecedor/fornecedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fornecedor])],
  providers: [FornecedorService],
  controllers: [FornecedorController],
  exports: []
})
export class FornecedorModule { }