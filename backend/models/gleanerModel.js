const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gleanerSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
});

module.exports = mongoose.model('Gleaner', gleanerSchema);