const router = require('express').Router()
const{
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/Thought-controllers');

// /api/Thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router.route('/:ThoughtId/Thought').get(getSingleThought).post(updateThought);
router.route('/:ThoughtId').get(getSingleThought).delete(deleteThought);

module.exports = router;