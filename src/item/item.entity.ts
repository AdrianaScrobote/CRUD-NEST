// item.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, 
  CreateDateColumn, ManyToOne, ManyToMany, TreeParent, TreeChildren, Tree, TreeLevelColumn } from 'typeorm';
import { Fornecedor } from '../fornecedor/fornecedor.entity'
import { Pedido } from '../pedido/pedido.entity'

@Tree("materialized-path")
@Entity({ name: 'item' })
export class Item {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isArchived: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @Column({ type: 'varchar', length: 300 })
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @Column({ type: 'varchar', length: 300 })
  lastChangedBy: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  internalComment: string | null;

  @ManyToOne(type => Fornecedor, fornecedor => fornecedor.itens)
  fornecedor: Fornecedor;

  @ManyToMany(() => Pedido, (pedido: Pedido) => pedido.itens)
  public pedidos: Pedido[];

  @TreeParent()
  public parent: Item

  @TreeChildren()
  public children: Item[];
}