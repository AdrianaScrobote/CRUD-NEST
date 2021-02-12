// pedido.entity.ts
import { Item } from '../item/item.entity';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'pedido' })
export class Pedido {

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

  @ManyToMany(() => Item, (item: Item) => item.pedidos)
  @JoinTable() // coloca somente em um lado da relação
  public itens: Item[];

}