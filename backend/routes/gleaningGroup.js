const express = require('express');
const {
    createGleaningGroup,
    getGleaningGroups,
    getGleaningGroup,
    deleteGleaningGroup,
    updateGleaningGroup
} = require('../controllers/gleaningGroupController');

const router = express.Router();

// GET all gleaning groups
router.get('/', getGleaningGroups);

// GET a single gleaning group
router.get('/:id', getGleaningGroup);

// POST a new gleaning group
router.post('/', createGleaningGroup);

// DELETE a single gleaning group
router.delete('/:id', deleteGleaningGroup);

// UPDATE a single gleaning group
router.put('/:id', updateGleaningGroup);

module.exports = router;