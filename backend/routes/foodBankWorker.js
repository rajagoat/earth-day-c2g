const express = require('express');
const {
    createFoodBankWorker,
    getFoodBankWorkers,
    getFoodBankWorker,
    deleteFoodBankWorker,
    updateFoodBankWorker
} = require('../controllers/foodBankWorkerController');

const router = express.Router();

// GET all food bank workers
router.get('/', getFoodBankWorkers);

// GET a single food bank worker
router.get('/:id', getFoodBankWorker);

// POST a new food bank worker
router.post('/', createFoodBankWorker);

// DELETE a single food bank worker
router.delete('/:id', deleteFoodBankWorker);

// UPDATE a single food bank worker
router.put('/:id', updateFoodBankWorker);

module.exports = router;