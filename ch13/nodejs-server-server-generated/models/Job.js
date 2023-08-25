'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


exports.Job = new Schema({
    creator_user_id: Schema.ObjectId,
    starts_at: Date,
    ends_at: Date,
    activity: String,
    created_at: Date,
    updated_at: Date,
    dog: {
        name: String,
        age: Number,
        breed: String,
        size: String
    }
});

exports.Job.methods.toResultFormat = function () {
    return {
        id: this._id,
        creator_user_id: this.creator_user_id,
        start_time: this.starts_at,
        end_time: this.ends_at,
        activity: this.activity,
        dog: this.dog
    };
};

