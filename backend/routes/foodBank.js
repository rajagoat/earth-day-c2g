const express = require('express');
const {
    createFoodBank,
    getFoodBanks,
    getFoodBank,
    deleteFoodBank,
    updateFoodBank
} = require('../controllers/foodBankController');

const router = express.Router();

// GET all food banks
router.get('/', getFoodBanks);

// GET a single food bank
router.get('/:id', getFoodBank);

// POST a new food bank
router.post('/', createFoodBank);

// DELETE a single food bank
router.delete('/:id', deleteFoodBank);

// UPDATE a single food bank
router.put('/:id', updateFoodBank);

module.exports = router;