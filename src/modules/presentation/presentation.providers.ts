import { DataSource } from 'typeorm';
import { Presentation } from './entities/presentation.entity';

// idealy 'PRESENTATION_REPOSITORY' and 'DATA_SOURCE' should be a constant
export const presentationProviders = [
  {
    provide: 'PRESENTATION_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(Presentation),
    inject: ['DATA_SOURCE'],
  },
];
