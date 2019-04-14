import { Document, Types } from 'mongoose';

export interface CountryInterface extends Document {
    name: string;
    countryCode: string;
    countryShortName: string;
}
