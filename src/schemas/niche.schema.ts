import * as mongoose from 'mongoose';
mongoose.set('useCreateIndex', true);

export const NicheSchema = new mongoose.Schema({
  name: String,
  orintalAge: Number,
  description: String,
});
const Niche = mongoose.model('Niche', NicheSchema);

module.exports = Niche;
