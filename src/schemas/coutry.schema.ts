import * as mongoose from 'mongoose';

export const CountrySchema = new mongoose.Schema({
    name: String,
    countryCode: String,
    countryShortName: String,
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;
