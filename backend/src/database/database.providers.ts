import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: String(process.env.DB_HOST),
        port: Number(process.env.DB_PORT),
        username: String(process.env.DB_USERNAME),
        password: String(process.env.DB_PASSWORD),
        database: String(process.env.DB_NAME),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
