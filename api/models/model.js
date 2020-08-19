'use strict';

const _var = require('../../env');
var db_collection = _var.server.db.collection;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var apiSchema = new Schema({
    name: {
        type: String,
        Required: 'name required'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});


module.exports = mongoose.model(db_collection, apiSchema);