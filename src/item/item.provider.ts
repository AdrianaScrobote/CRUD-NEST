import { Connection } from 'typeorm'

import { ItemRepository } from './item.repository'

import {
  DATABASE_CONNECTION,
  ITEM_REPOSITORY
} from '../common/constants'

export const ItemProvider = [
  {
    provide: ITEM_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getCustomRepository(ItemRepository),
    inject: [DATABASE_CONNECTION]
  }
]
