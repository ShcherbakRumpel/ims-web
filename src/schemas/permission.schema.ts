import * as mongoose from 'mongoose';

export const PermissionShema = new mongoose.Schema({

    name: String,

});

const Permission = mongoose.model('Permission', PermissionShema);

module.exports = Permission;
