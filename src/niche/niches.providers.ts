import { Connection } from 'mongoose';
import { NicheSchema } from '../schemas/niche.schema';

export const nichesProviders = [
  {
    provide: 'NICHE_MODEL',
    useFactory: (connection: Connection) => connection.model('Niche', NicheSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
