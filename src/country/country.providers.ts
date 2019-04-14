import { Connection } from 'mongoose';
import { CountrySchema } from '../schemas/coutry.schema';

export const countriesProviders = [
  {
    provide: 'COUNTRY_MODEL',
    useFactory: (connection: Connection) => connection.model('Country', CountrySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
