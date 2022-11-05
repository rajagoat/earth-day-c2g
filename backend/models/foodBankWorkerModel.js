const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodBankWorkerSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    foodBank: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Food Bank',
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
});

module.exports = mongoose.model('Food Bank Worker', foodBankWorkerSchema);