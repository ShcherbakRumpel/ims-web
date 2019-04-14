import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';
import {UserCreate} from '../interfaces/user.interface';
export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  activateDate: Date,
  configurationStep: Number,
  numberOfFolowers: Number,
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
  },
  country: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    },
  ],
  isCompleteProfileConfiguration: Boolean,
});
UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model<UserCreate & mongoose.Document>('User', UserSchema);

module.exports = User;
