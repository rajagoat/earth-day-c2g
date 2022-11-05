const User = require('../models/userModel');
const FoodBank = require('../models/foodBankModel');
const FoodBankWorker = require('../models/foodBankWorkerModel');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// get all food bank workers
const getFoodBankWorkers = async (req, res) => {
    try {
        const foodBankWorker = await FoodBankWorker.find({});
        res.status(200).json(foodBankWorker);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get a single food bank worker
const getFoodBankWorker = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such food bank worker found." });
    }
    try {
        const foodBankWorker = await FoodBankWorker.findById(id);
        if (!foodBankWorker) {
            return res.status(404).json({ error: "No such food bank worker found." });
        } else {
            res.status(200).json(foodBankWorker);
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// create a new food bank worker
const createFoodBankWorker = async (req, res) => {
    let emptyFields = [];
    const {
        _id,
        foodBank,
        firstName,
        lastName,
    } = req.body;
    if (!_id) {
        emptyFields.push('_id');
    }
    if (!foodBank) {
        emptyFields.push('foodBank');
    }
    if (!firstName) {
        emptyFields.push('firstName');
    }
    if (!lastName) {
        emptyFields.push('lastName');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({
            error: "Please fill in all the fields.",
            emptyFields
        });
    }
    try {
        const userId = await User.findById({ _id: ObjectId(_id) });
        const foodBankId = await FoodBank.findById({ _id: ObjectId(foodBank) });
        if (ObjectId.isValid(_id) && userId && foodBankId) {
            const foodBankWorker = await FoodBankWorker.create({
                _id,
                foodBank,
                firstName,
                lastName,
            });
            res.status(200).json(foodBankWorker);
        } else {
            res.status(404).json({ error: "No users or food banks are linked to the IDs given." });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a single food bank worker's info
const deleteFoodBankWorker = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such food bank worker found." });
    }
    try {
        // both the food bank worker instance and the user instance are deleted
        const foodBankWorker = await FoodBankWorker.findOneAndDelete({ _id: id });
        const user = await User.findOneAndDelete({ _id: id });
        if (!foodBankWorker || !user) {
            return res.status(404).json({ error: "Account is not linked properly." });
        } else {
            res.status(200).json(foodBankWorker);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update a single food bank workers's info
const updateFoodBankWorker = async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such food bank worker found." });
    }
    try {
        if (req.body.hasOwnProperty('foodBank')) {
            const { foodBank } = req.body;
            const foodBankId = await FoodBank.findById({ _id: ObjectId(foodBank) });
            if (!foodBankId) {
                return res.status(404).json({ error: "No food bank worker found with the given ID." });
            }
        }
        const foodBankWorker = await FoodBankWorker.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            // new: true returns updated value instead of old one
            { new: true }
        );
        if (!foodBankWorker) {
            return res.status(404).json({ error: "No such food bank worker found." });
        } else {
            res.status(200).json(foodBankWorker);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createFoodBankWorker,
    getFoodBankWorkers,
    getFoodBankWorker,
    deleteFoodBankWorker,
    updateFoodBankWorker
};