const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gleaningActivitySchema = new Schema({
    
}, {timestamps: true});

module.exports = mongoose.model('Gleaning Activity', gleaningActivitySchema);