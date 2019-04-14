import { Connection } from 'mongoose';
import { NicheSchema } from '../schemas/niche.schema';

export const usersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', NicheSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
