const Farmer = require('../models/farmerModel');

const mongoose = require('mongoose');

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
    if (!mongoose.Types.ObjectId.isValid(id)) {
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
        firstName,
        lastName,
        streetAddress,
        city,
        province,
        postalCode,
        phoneNumber
    } = req.body;
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
    if (emptyFields.length > 0) {
        return res.status(400).json({
            error: "Please fill in all the fields.",
            emptyFields
        });
    }
    try {
        const farmer = await Farmer.create({
            firstName,
            lastName,
            streetAddress,
            city,
            province,
            postalCode,
            phoneNumber
        });
        res.status(200).json(farmer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a single farmer's info

// update a single farmer's info

module.exports = {
    createFarmer,
    getFarmers,
    getFarmer,
}