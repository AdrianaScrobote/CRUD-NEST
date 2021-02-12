// pedido.dto.ts
import { IsString, IsUUID, IsDate} from 'class-validator';
import { Pedido } from '../pedido.entity';

export class PedidoDTO implements Readonly<PedidoDTO> {
  @IsUUID()
  id: string;

  @IsDate()
  createDateTime: Date;

  @IsString()
  createdBy: string;

  @IsDate()
  lastChangedDateTime: Date;

  @IsString()
  lastChangedBy: string;
}