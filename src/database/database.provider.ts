import { createConnection } from 'typeorm'

import { DATABASE_CONNECTION } from '../common/constants'
import {Item} from '../item/item.entity'

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        name: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        logging: 'all',
        logger: 'advanced-console',
        migrationsRun: true,
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        entities: [
            Item
        ],
        subscribers: [],
        synchronize: false
      })
  }
]
