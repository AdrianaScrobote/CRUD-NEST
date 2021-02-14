// pedido.entity.ts
import { Item } from '../item/item.entity';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'pedido' })
export class Pedido {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date

  @Column({ type: 'varchar', length: 300 })
  createdBy: string;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date

  @Column({ type: 'varchar', length: 300 })
  lastChangedBy: string;

  /*@ManyToMany(() => Item)
  @JoinTable()
  public itens: Item[];*/

  @ManyToMany(() => Item, (item: Item) => item.pedidos)
  @JoinTable()
  public itens: Item[];
}