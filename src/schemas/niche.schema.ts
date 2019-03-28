import * as mongoose from 'mongoose';

export const NicheSchema = new mongoose.Schema({
  name: String,
  orintalAge: Number,
  description: String,
});
