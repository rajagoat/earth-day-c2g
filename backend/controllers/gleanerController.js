const User = require('../models/userModel');
const Gleaner = require('../models/gleanerModel');
const GleaningGroup = require('../models/gleaningGroupModel');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// get all gleaners
const getGleaners = async (req, res) => {
    try {
        const gleaners = await Gleaner.find({});
        res.status(200).json(gleaners);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get a single gleaner
const getGleaner = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such gleaner found." });
    }
    try {
        const gleaner = await Gleaner.findById(id);
        if (!gleaner) {
            return res.status(404).json({ error: "No such gleaner found." });
        } else {
            res.status(200).json(gleaner);
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// create a new gleaner
const createGleaner = async (req, res) => {
    let emptyFields = [];
    const {
        _id,
        firstName,
        lastName,
        postalCode,
        city,
        phoneNumber,
        gleaningGroup,
        distanceRange
    } = req.body;
    if (!_id) {
        emptyFields.push('_id');
    }
    if (!firstName) {
        emptyFields.push('firstName');
    }
    if (!lastName) {
        emptyFields.push('lastName');
    }
    if (!postalCode) {
        emptyFields.push('postalCode');
    }
    if (!city) {
        emptyFields.push('city');
    }
    if (!gleaningGroup) {
        emptyFields.push('gleaningGroup');
    }
    if (!distanceRange) {
        emptyFields.push('distanceRange');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({
            error: "Please fill in all the fields.",
            emptyFields
        });
    }
    try {
        const userId = await User.findById({ _id: ObjectId(_id) });
        if (ObjectId.isValid(_id) && userId) {
            const gleaner = await Gleaner.create({
                _id,
                firstName,
                lastName,
                postalCode,
                city,
                phoneNumber,
                gleaningGroup,
                distanceRange
            });
            res.status(200).json(gleaner);
        } else {
            res.status(404).json({ error: "No user account is linked to the ID given." });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a single gleaner's info
const deleteGleaner = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such gleaner found." });
    }
    try {
        // both the gleaner instance and the user instance are deleted
        const gleaner = await Gleaner.findOneAndDelete({ _id: id });
        const user = await User.findOneAndDelete({ _id: id });
        if (!gleaner || !user) {
            return res.status(404).json({ error: "Account is not linked properly." });
        } else {
            res.status(200).json(gleaner);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update a single gleaner's info
const updateGleaner = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such gleaner found." });
    }
    try {
        if (req.body.hasOwnProperty('gleaningGroup')) {
            const { gleaningGroup } = req.body;
            const gleaningGroupId = GleaningGroup.findById({ _id: ObjectId(gleaningGroup) });
            if (!gleaningGroupId) {
                return res.status(404).json({ error: "No gleaning group with the given ID found." });
            }
        }
        const gleaner = await Gleaner.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            // new: true returns updated value instead of old one
            { new: true }
        );
        if (!gleaner) {
            return res.status(404).json({ error: "No such gleaner found." });
        } else {
            res.status(200).json(gleaner);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createGleaner,
    getGleaners,
    getGleaner,
    deleteGleaner,
    updateGleaner
};