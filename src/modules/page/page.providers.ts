import { DataSource } from 'typeorm';
import { Page } from './entities/page.entity';

// idealy 'PAGE_REPOSITORY' and 'DATA_SOURCE' should be a constant
export const pageProviders = [
  {
    provide: 'PAGE_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(Page),
    inject: ['DATA_SOURCE'],
  },
];
