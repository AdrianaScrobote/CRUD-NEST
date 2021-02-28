// item.service.ts 

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../item/item.entity';
import { Repository, DeleteResult, getManager } from 'typeorm';
import { ItemDTO } from '../item/dto/item.dto'
import { ExportToCsv } from 'export-to-csv';

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

  public async getCsv() {

    try {
      let itens = await this.getAll()

      let data = []
      let element 

      if(itens){
        itens.map((item) => {
          element = {}
          Object.entries(item).forEach(([key, value]) => {
            element[key] = value
        });
        data.push(element)
        })
      }
     
      const options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true, 
        showTitle: true,
        title: 'Relatório',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
        //headers: ['name', 'age', 'average', 'approved', 'description']
      };
     
      const csvExporter = new ExportToCsv(options)
    
      return  csvExporter.generateCsv(data, true)
    } catch (err) {
      throw new Error("Não foi possivel gerar o csv");
    }  
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