import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const dBConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  username: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  entities: [__dirname + '/src/infrastructure/data_access/models/*.entity.ts'],
  migrations: [
    __dirname + '/src/infrastructure/data_access/migrations/*{.ts,.js}',
  ],
  cli: {
    migrationsDir: __dirname + '/src/infrastructure/data_access/migrations',
  },
};
