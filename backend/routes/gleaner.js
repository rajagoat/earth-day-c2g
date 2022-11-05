const express = require('express');
const {
    createGleaner,
    getGleaners,
    getGleaner,
    deleteGleaner,
    updateGleaner
} = require('../controllers/gleanerController');

const router = express.Router();

// GET all gleaners
router.get('/', getGleaners);

// GET a single gleaner
router.get('/:id', getGleaner);

// POST a new gleaner
router.post('/', createGleaner);

// DELETE a single gleaner
router.delete('/:id', deleteGleaner);

// UPDATE a single gleaner
router.put('/:id', updateGleaner);

module.exports = router;