'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Alert Messages Model
let AlertsSchema = new Schema({
    messageDescription: {
        type: String,
        required: true
    },
    forNUID : {
        type: mongoose.Schema.Types.ObjectId, ref: 'nuActiveDirectory' 
    },
    forRole : {
        type: String,
        enum: ['Student', 'Alumni', 'Driver', 'Admin']
    },
    fromNUID : {
        type: mongoose.Schema.Types.ObjectId, ref: 'nuActiveDirectory' 
    },
    created_at    : { type: Date },
    updated_at    : { type: Date }
});

module.exports = mongoose.model('Alerts', AlertsSchema,'alerts');