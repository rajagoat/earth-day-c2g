const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gleaningGroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    leader: {
        type: Schema.Types.ObjectId, ref: 'Gleaner',
        required: true
    },
    gleaners: [{
        type: Schema.Types.ObjectId, ref: 'Gleaner',
        required: true
    }],
});

module.exports = mongoose.model('Gleaning Group', gleaningGroupSchema);