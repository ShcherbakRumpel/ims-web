import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';
import * as bcrypt from 'bcrypt';
export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});
UserSchema.plugin(passportLocalMongoose);
UserSchema.methods.checkPassword = function(attempt, callback) {

  const user = this;

  bcrypt.compare(attempt, user.password, (err, isMatch) => {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });

};
const User = mongoose.model('User', UserSchema);

module.exports = User;
