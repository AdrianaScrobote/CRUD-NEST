// pedido.dto.ts
import { IsString, IsUUID, IsDate, IsObject} from 'class-validator';
import { Item } from '../../item/item.entity';

export class PedidoDTO implements Readonly<PedidoDTO> {
  @IsUUID()
  id: string;

  @IsDate()
  createdAt: Date;

  @IsString()
  createdBy: string;

  @IsDate()
  updatedAt: Date;

  @IsString()
  lastChangedBy: string;

  @IsObject()
  itens: Item[];
}