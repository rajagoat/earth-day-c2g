const User = require('../models/userModel');
const Farmer = require('../models/farmerModel');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// get all farmers
const getFarmers = async (req, res) => {
    try {
        const farmers = await Farmer.find({});
        res.status(200).json(farmers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get a single farmer
const getFarmer = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such farmer found." });
    }
    try {
        const farmer = await Farmer.findById(id);
        if (!farmer) {
            return res.status(404).json({ error: "No such farmer found." });
        } else {
            res.status(200).json(farmer);
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// create a new farmer
const createFarmer = async (req, res) => {
    let emptyFields = [];
    const {
        _id,
        firstName,
        lastName,
        streetAddress,
        city,
        province,
        postalCode,
        phoneNumber,
        capacity,
        isValidated
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
    if (!streetAddress) {
        emptyFields.push('streetAddress');
    }
    if (!city) {
        emptyFields.push('city');
    }
    if (!province) {
        emptyFields.push('province');
    }
    if (!postalCode) {
        emptyFields.push('postalCode');
    }
    if (!capacity) {
        emptyFields.push('capacity');
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
            const farmer = await Farmer.create({
                _id,
                firstName,
                lastName,
                streetAddress,
                city,
                province,
                postalCode,
                phoneNumber,
                capacity,
                isValidated
            });
            res.status(200).json(farmer);
        } else {
            res.status(404).json({ error: "No user account is linked to the ID given." });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a single farmer's info
const deleteFarmer = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such farmer found." });
    }
    try {
        // both the farmer instance and the user instance are deleted
        const farmer = await Farmer.findOneAndDelete({ _id: id });
        const user = await User.findOneAndDelete({ _id: id });
        if (!farmer || !user) {
            return res.status(404).json({ error: "Account is not linked properly." });
        } else {
            res.status(200).json(farmer);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update a single farmer's info
const updateFarmer = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such farmer found." });
    }
    try {
        const farmer = await Farmer.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            // new: true returns updated value instead of old one
            { new: true }
        );
        if (!farmer) {
            return res.status(404).json({ error: "No such farmer found." });
        } else {
            res.status(200).json(farmer);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createFarmer,
    getFarmers,
    getFarmer,
    deleteFarmer,
    updateFarmer
};