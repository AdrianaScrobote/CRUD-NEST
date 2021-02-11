import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { FornecedorDTO } from '../fornecedor/dto/fornecedor.dto'

@Controller('fornecedor')
export class FornecedorController {
  constructor(private serv: FornecedorService) { }

  @Get('')
  public async getAll() {
    return await this.serv.getAll();
  }

  @Post('')
  public async post(@Body() dto: FornecedorDTO): Promise<FornecedorDTO> {
    return this.serv.create(dto);
  }

  @Put('/:id')
  public async put(@Param('id') id, @Body() fornecedorDto: FornecedorDTO): Promise<FornecedorDTO> {

      let fornecedor = await this.findOne(id)
      let date = new Date()

      fornecedor.createdBy = fornecedorDto.createdBy
      fornecedor.lastChangedBy = fornecedorDto.lastChangedBy
      fornecedor.lastChangedDateTime = date

      return this.serv.create(fornecedor);
  }

  public async findOne(id: string): Promise<FornecedorDTO> {
    return this.serv.findOne(id);
  }
}
