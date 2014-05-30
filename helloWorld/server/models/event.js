'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Event Schema
 */
var EventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email'],
    },
    date: {
        type: String,
        unique: true,
		required: true,
    },
});


mongoose.model('Event', EventSchema);