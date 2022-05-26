const { Thoughts, User } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thoughts.find({})
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.id})
      .select('-__v')
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought
  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.ThoughtId })
      .then((thoughts) => {
        if (!thoughts){
          res.status(404).json({ message: 'No thought with that ID' })
        }
       })
      .then(() => res.json({ message: 'Thought and user deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.ThoughtId },
      req.body,
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  addReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.ThoughtId },
      { $addToSet:{reactions: req.body}},
      {new: true }
    )
      .then((reaction) => res.status(200).json("Reaction has been added"))
      .catch((err) => res.status(500).json(err));

  },
  removeReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.ThoughtId },
      { $pull:{reactions: {_id:req.params.reactionId}}},
      {new: true }
    )
      .then((reaction) => res.status(200).json("Reaction has been deleted"))
      .catch((err) => res.status(500).json(err));

  }
};

