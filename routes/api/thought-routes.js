const router = require('express').Router()
const{
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/Thought-controllers');
const {
    addReaction
} = require('../../controllers/reaction-controllers')
// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router.route('/:ThoughtId/Thought').get(getSingleThought).post(updateThought);
router.route('/:ThoughtId').get(getSingleThought).delete(deleteThought);
router.route('/:ThoughtId/reactions').post(addReaction);
module.exports = router;