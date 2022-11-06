const FoodBank = require('../models/foodBankModel');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// get all food banks
const getFoodBanks = async (req, res) => {
    try {
        const foodBank = await FoodBank.find({});
        res.status(200).json(foodBank);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get a single food bank 
const getFoodBank = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such food bank found." });
    }
    try {
        const foodBank = await FoodBank.findById(id);
        if (!foodBank) {
            return res.status(404).json({ error: "No such food bank found." });
        } else {
            res.status(200).json(foodBank);
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// create a new food bank 
const createFoodBank = async (req, res) => {
    let emptyFields = [];
    const {
        name,
        streetAddress,
        city,
        province,
        postalCode,
        phoneNumber,
        emailAddress,
        capacity,
        distance
    } = req.body;
    if (!name) {
        emptyFields.push('name');
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
    if (!phoneNumber) {
        emptyFields.push('phoneNumber');
    }
    if (!capacity) {
        emptyFields.push('capacity');
    }
    if (!distance) {
        emptyFields.push('distance');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({
            error: "Please fill in all the fields.",
            emptyFields
        });
    }
    try {
        const foodBank = await FoodBank.create({
            name,
            streetAddress,
            city,
            province,
            postalCode,
            phoneNumber,
            emailAddress,
            capacity,
            distance
        });
        res.status(200).json(foodBank);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a single food bank's info
const deleteFoodBank = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such food bank found." });
    }
    try {
        // both the food bank instance and the user instance are deleted
        const foodBank = await FoodBank.findOneAndDelete({ _id: id });
        if (!foodBank) {
            return res.status(404).json({ error: "No such food bank found." });
        } else {
            res.status(200).json(foodBank);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update a single food bank's info
const updateFoodBank = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such food bank found." });
    }
    try {
        const foodBank = await FoodBank.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            // new: true returns updated value instead of old one
            { new: true }
        );
        if (!foodBank) {
            return res.status(404).json({ error: "No such food bank found." });
        } else {
            res.status(200).json(foodBank);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createFoodBank,
    getFoodBanks,
    getFoodBank,
    deleteFoodBank,
    updateFoodBank
};