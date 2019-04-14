import { Connection } from 'mongoose';
import { PermissionShema } from '../schemas/permission.schema';

export const permissionsProviders = [
  {
    provide: 'PERMISSION_MODEL',
    useFactory: (connection: Connection) => connection.model('Permission', PermissionShema),
    inject: ['DATABASE_CONNECTION'],
  },
];
