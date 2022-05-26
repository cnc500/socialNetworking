const router = require('express').Router()
const{
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/Thought-controllers');
// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router.route('/:ThoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);
router.route('/:ThoughtId/reactions').put(addReaction);
router.route('/:ThoughtId/remove-reaction/:reactionId').put(removeReaction);
module.exports = router;