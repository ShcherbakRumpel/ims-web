import { Document, Types } from 'mongoose';

export interface RoleInterface extends Document {
    name: string;
    permissions: Types.ObjectId[];
}
