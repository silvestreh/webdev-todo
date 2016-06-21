'use strict';

// todo-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, 'default': false },
    priority: { type: String, enum: ['high', 'medium', 'low'], 'default': 'low' },
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },

    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
});

const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;
