'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


exports.JobApplication = new Schema({
    created_at: Date,
    updated_at: Date,
    user_id: Schema.ObjectId,
    job_id: Schema.ObjectId,
    status: String
});

exports.JobApplication.methods.toResultFormat = function () {
    return {
        id: this._id,
        user_id: this.user_id,
        job_id: this.job_id,
        status: this.status
    };
};

