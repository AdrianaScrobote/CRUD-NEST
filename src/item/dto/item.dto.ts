// item.dto.ts
import { IsString, IsUUID, IsBoolean, IsDate} from 'class-validator';
import { Item } from '../item.entity';

export class ItemDTO implements Readonly<ItemDTO> {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  isActive: boolean;

  @IsDate()
  createDateTime: Date;

  @IsString()
  createdBy: string;

  @IsDate()
  lastChangedDateTime: Date;

  @IsString()
  lastChangedBy: string;

  @IsString()
  internalComment: string;

}