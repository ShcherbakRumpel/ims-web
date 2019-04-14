import * as mongoose from 'mongoose';
import { CountryInterface } from '../interfaces/country.interface';

export const CountrySchema = new mongoose.Schema({
    name: String,
    countryCode: String,
    countryShortName: String,
});

const Country = mongoose.model<CountryInterface & mongoose.Document>('Country', CountrySchema);

module.exports = Country;
