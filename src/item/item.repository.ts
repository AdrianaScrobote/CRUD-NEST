import { TreeRepository, EntityRepository } from 'typeorm'
import { Item } from './item.entity'

@EntityRepository(Item)
export class ItemRepository extends TreeRepository<Item> {
  /**
   * Finds all answer researches and send when.
   *
   * @return Promise<Item[]>
   */
  public async findAll(): Promise<Item[]> {
      console.log("chegueiiiii")
    const treeCategories = await this.findTrees();
    console.log("treeCategories")
    console.log(treeCategories)

    return await this.createQueryBuilder('item').getMany()
  }
}
