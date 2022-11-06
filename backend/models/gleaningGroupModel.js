const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gleaningGroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gleaners: [{
        type: Schema.Types.ObjectId, ref: 'Gleaner',
        required: true,
        validate: [groupMinimum, '{PATH} fails to meet the minimum group size of 5']
    }],
});

groupMinimum = (val) => {
    return val.length >= 5;
}

module.exports = mongoose.model('Gleaning Group', gleaningGroupSchema);