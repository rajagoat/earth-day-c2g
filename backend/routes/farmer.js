const express = require('express');
const {
    createFarmer,
    getFarmers,
    getFarmer,
    /* deleteFarmer,
    updateFarmer */
} = require('../controllers/farmerController');

const router = express.Router();

// GET all farmers
router.get('/', getFarmers);

// GET a single farmer
router.get('/:id', getFarmer);

// POST a new farmer
router.post('/', createFarmer);

// DELETE a single farmer

// UPDATE a single farmer

module.exports = router;