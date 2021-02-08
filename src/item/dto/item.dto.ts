// item.dto.ts
import { IsString, IsUUID, } from 'class-validator';
import { Item } from '../item.entity';

export class ItemDTO implements Readonly<ItemDTO> {
  @IsUUID()
  id: string;


  @IsString()
  name: string;

  @IsString()
  description: string;
}