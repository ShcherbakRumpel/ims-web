import { Document } from 'mongoose';

export interface Niche extends Document {
    readonly name: string;
    readonly orintalAge: number;
    readonly description: string;
}
