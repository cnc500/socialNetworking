const { User, Thoughts } = require("../models");

module.exports = {
    // Get all users
    getAllUsers(req, res) {
      User.find({})
        .populate({path:"friends",select:"-__v"})
        .populate({path:"thoughts",select:"-__v"})

        .select("-__v")
        .then(users => res.json(users))
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
    },
    // Get a single user
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then(async (user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json({
                user,
                grade: await grade(req.params.userId),
              })
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // create a new user
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Delete a user and remove their thoughts
    deleteUser(req, res) {
      User.findOneAndRemove({ _id: req.params.userId })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No such user exists' })
            : Thoughts.findAllAndRemove(
                { users: req.params.userId },
                { $pull: { users: req.params.userId } },
                { new: true }
              )
        )
        .then((thoughts) =>
          !thoughts
            ? res.status(404).json({
                message: 'User deleted, but no thoughts found',
              })
            : res.json({ message: 'User successfully deleted' })
        )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
      // Update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
        )
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

}

// module.exports = usercontrollers;