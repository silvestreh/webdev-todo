'use strict';

const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { 
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => validator.isEmail(v)
        }
    },
    password: { type: String, required: true },
    resetPwdToken: {type: String, default: null },

    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
