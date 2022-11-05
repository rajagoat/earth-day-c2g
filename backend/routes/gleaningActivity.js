const express = require('express');
const {
    createGleaningActivity,
    getGleaningActivities,
    getGleaningActivity,
    deleteGleaningActivity,
    updateGleaningActivity
} = require('../controllers/gleaningActivityController');

const router = express.Router();

// GET all gleaning activities
router.get('/', getGleaningActivities);

// GET a single gleaning activity
router.get('/:id', getGleaningActivity);

// POST a new gleaning activity
router.post('/', createGleaningActivity);

// DELETE a single gleaning activity
router.delete('/:id', deleteGleaningActivity);

// UPDATE a single gleaning activity
router.put('/:id', updateGleaningActivity);

module.exports = router;