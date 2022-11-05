const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gleaningActivitySchema = new Schema({
    farmer: {
        type: Schema.Types.ObjectId, ref: 'Farmer',
        required: true
    },
    gleaningGroup: {
        type: Schema.Types.ObjectId, ref: 'Gleaning Group',
        required: true
    },
    foodBank: {
        type: Schema.Types.ObjectId, ref: 'Food Bank',
        required: true
    },
    status: {
        type: String,
        enum: {
            values: [
                'New',
                'Request',
                'Accepted',
                'Ongoing',
                'Ready for Pickup',
                'Complete',
                'Cancelled'
            ],
            message: '{VALUE} is not supported for status'
        },
        required: true
    },
    typeOfProduce: {
        type: String,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    numberOfProduceCollected: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Gleaning Activity', gleaningActivitySchema);