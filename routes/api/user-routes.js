const router = require('express').Router()
const{
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controllers');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId/user').get(getSingleUser);
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);
router.route('/:userId/addFriend/:friendId').put(addFriend);
router.route('/:userId/removeFriend/:friendId').put(removeFriend);

module.exports = router;