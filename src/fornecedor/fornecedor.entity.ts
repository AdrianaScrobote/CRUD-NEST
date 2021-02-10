// fornecedor.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Item } from '../item/item.entity'

@Entity({ name: 'fornecedor' })
export class Fornecedor {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @Column({ type: 'varchar', length: 300 })
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @Column({ type: 'varchar', length: 300 })
  lastChangedBy: string;
}