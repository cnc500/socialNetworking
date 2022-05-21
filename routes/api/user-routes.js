const router = require('express').Router()
const{
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controllers');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId/user').get(getSingleUser).post(updateUser);
router.route('/:userId').get(getSingleUser).delete(deleteUser);

module.exports = router;