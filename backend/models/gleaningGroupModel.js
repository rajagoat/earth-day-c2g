const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gleaningGroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    leader: {
        type: Schema.Types.ObjectId, ref: 'Gleaner',
    },
    gleaners: [{
        type: Schema.Types.ObjectId, ref: 'Gleaner',
    }],
});

module.exports = mongoose.model('Gleaning Group', gleaningGroupSchema);