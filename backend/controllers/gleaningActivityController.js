const GleaningActivity = require('../models/gleaningActivityModel');
const Farmer = require('../models/farmerModel');
const GleaningGroup = require('../models/gleaningGroupModel');
const FoodBank = require('../models/foodBankModel');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// get all gleaning activities
const getGleaningActivities = async (req, res) => {
    try {
        const gleaningActivity = await GleaningActivity.find({});
        res.status(200).json(gleaningActivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get a single gleaning activity 
const getGleaningActivity = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such gleaning activity found." });
    }
    try {
        const gleaningActivity = await GleaningActivity.findById(id);
        if (!gleaningActivity) {
            return res.status(404).json({ error: "No such gleaning activity found." });
        } else {
            res.status(200).json(gleaningActivity);
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// create a new gleaning activity 
const createGleaningActivity = async (req, res) => {
    let emptyFields = [];
    const {
        farmer,
        streetAddress,
        city,
        typeOfProduce,
        priority,
        endDate,
        numberOfProduceCollected
    } = req.body;
    if (!farmer) {
        emptyFields.push('farmer');
    }
    if (!streetAddress) {
        emptyFields.push('streetAddress');
    }
    if (!city) {
        emptyFields.push('city');
    }
    if (!typeOfProduce) {
        emptyFields.push('typeOfProduce');
    }
    if (!endDate) {
        emptyFields.push('endDate');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({
            error: "Please fill in all the fields.",
            emptyFields
        });
    }
    try {
        const farmerId = await Farmer.findById({ _id: ObjectId(farmer) });
        if (farmerId) {
            const gleaningActivity = await GleaningActivity.create({
                farmer,
                streetAddress,
                city,
                typeOfProduce,
                priority,
                endDate,
                numberOfProduceCollected
            });
            res.status(200).json(gleaningActivity);
        } else {
            res.status(404).json({ error: "Farmer ID is invalid." });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a single gleaning activity
const deleteGleaningActivity = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such gleaning activity found." });
    }
    try {
        const gleaningActivity = await GleaningActivity.findOneAndDelete({ _id: id });
        if (!gleaningActivity) {
            return res.status(404).json({ error: "No such gleaning activity found." });
        } else {
            res.status(200).json(gleaningActivity);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update a single gleaning activity's info (overwrites pre-existing data)
const updateGleaningActivity = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such gleaning activity found." });
    }
    try {
        if (req.body.hasOwnProperty('farmer')) {
            const { farmer } = req.body;
            const farmerId = await Farmer.findById({ _id: ObjectId(farmer) });
            if (!farmerId) {
                return res.status(404).json({ error: "No such gleaning activity found." });
            }
        }
        if (req.body.hasOwnProperty('gleaningGroup')) {
            const { gleaningGroup } = req.body;
            const gleaningGroupId = await GleaningGroup.findById({ _id: ObjectId(gleaningGroup) });
            if (!gleaningGroupId) {
                return res.status(404).json({ error: "No such gleaning activity found." });
            }
        }
        if (req.body.hasOwnProperty('foodBank')) {
            const { foodBank } = req.body;
            const foodBankId = await FoodBank.findById({ _id: ObjectId(foodBank) });
            if (!foodBankId) {
                return res.status(404).json({ error: "No such gleaning activity found." });
            }
        }
        const gleaningActivity = await GleaningActivity.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            // new: true returns updated value instead of old one
            { new: true }
        );
        if (!gleaningActivity) {
            return res.status(404).json({ error: "No such gleaning activity found." });
        } else {
            res.status(200).json(gleaningActivity);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createGleaningActivity,
    getGleaningActivities,
    getGleaningActivity,
    deleteGleaningActivity,
    updateGleaningActivity
};