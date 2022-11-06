const Gleaner = require('../models/gleanerModel');
const GleaningGroup = require('../models/gleaningGroupModel');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// get all gleaning groups
const getGleaningGroups = async (req, res) => {
    try {
        const gleaningGroup = await GleaningGroup.find({});
        res.status(200).json(gleaningGroup);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get a single gleaning group 
const getGleaningGroup = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such gleaning group found." });
    }
    try {
        const gleaningGroup = await GleaningGroup.findById(id);
        if (!gleaningGroup) {
            return res.status(404).json({ error: "No such gleaning group found." });
        } else {
            res.status(200).json(gleaningGroup);
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// create a new gleaning group 
const createGleaningGroup = async (req, res) => {
    let emptyFields = [];
    const {
        name,
        leader,
        gleaners
    } = req.body;
    if (!name) {
        emptyFields.push('name');
    }
    if (!leader) {
        emptyFields.push('leader');
    }
    if (!gleaners) {
        emptyFields.push('gleaners');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({
            error: "Please fill in all the fields.",
            emptyFields
        });
    }
    try {
        const gleanerIds = gleaners.map(ObjectId);
        const foundGleanerIds = await Gleaner.find({ _id: { $in: gleanerIds } });
        if (gleanerIds.length === foundGleanerIds.length) {
            const gleaningGroup = await GleaningGroup.create({
                name,
                gleaners
            });
            res.status(200).json(gleaningGroup);
        } else {
            res.status(404).json({ error: "One or more of the users have invalid IDs." });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a single gleaning group's info
const deleteGleaningGroup = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such gleaning group found." });
    }
    try {
        const gleaningGroup = await GleaningGroup.findOneAndDelete({ _id: id });
        if (!gleaningGroup) {
            return res.status(404).json({ error: "No such gleaning group found." });
        } else {
            res.status(200).json(gleaningGroup);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update a single gleaning group's info (overwrites pre-existing data)
const updateGleaningGroup = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such gleaning group found." });
    }
    try {
        if (req.body.hasOwnProperty('leader')) {
            const { leader } = req.body;
            const leaderId = await Gleaner.findById({ _id: ObjectId(leader) });
            if (!leaderId) {
                return res.status(404).json({ error: "No gleaner found with the given ID." });
            }
        }
        if (req.body.hasOwnProperty('gleaners')) {
            const { gleaners } = req.body;
            const gleanerIds = gleaners.map(ObjectId);
            const foundGleanerIds = await Gleaner.find({ _id: { $in: gleanerIds } });
            if (gleanerIds.length !== foundGleanerIds.length) {
                return res.status(404).json({ error: "One or more of the users have invalid IDs." });
            }
        }
        const gleaningGroup = await GleaningGroup.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            // new: true returns updated value instead of old one
            { new: true }
        );
        if (!gleaningGroup) {
            return res.status(404).json({ error: "No such gleaning group found." });
        } else {
            res.status(200).json(gleaningGroup);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    createGleaningGroup,
    getGleaningGroups,
    getGleaningGroup,
    deleteGleaningGroup,
    updateGleaningGroup
};