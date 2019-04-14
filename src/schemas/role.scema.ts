import * as mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({

    name: String,
    permissions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Permission',
        },
    ],
});

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;
