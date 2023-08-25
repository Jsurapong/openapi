'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.User = new Schema({
    email: String,
    password: String,
    full_name: String,
    created_at: Date,
    updated_at: Date,
    roles: [String]
});

exports.User.methods.toResultFormat = function () {
    return {
        id: this._id,
        email: this.email,
        full_name: this.full_name,
        roles: this.roles
    }
}