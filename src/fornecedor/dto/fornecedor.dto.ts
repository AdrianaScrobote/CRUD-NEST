// fornecedor.dto.ts
import { IsString, IsUUID, IsDate} from 'class-validator';
import { Fornecedor } from '../fornecedor.entity';

export class FornecedorDTO implements Readonly<FornecedorDTO> {
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