const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gleaningActivitySchema = new Schema({
    farmer: {
        type: Schema.Types.ObjectId, ref: 'Farmer',
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gleaningGroup: {
        type: Schema.Types.ObjectId, ref: 'Gleaning Group',
    },
    foodBank: {
        type: Schema.Types.ObjectId, ref: 'Food Bank',
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
        default: 'New'
    },
    typeOfProduce: {
        type: String,
        required: true
    },
    priority: {
        type: Boolean,
        default: false
    },
    endDate: {
        type: Date,
        required: true
    },
    weightOfProduceCollected: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Gleaning Activity', gleaningActivitySchema);