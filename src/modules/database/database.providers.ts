import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      try {
        const dataSource = new DataSource({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'user',
          password: 'pwd',
          database: 'db',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        });
        console.log('connected to database');

        return dataSource.initialize();
      } catch (err) {
        console.log(err);
      }
    },
  },
];
