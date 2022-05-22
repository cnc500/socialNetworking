const { Thoughts, User, Reaction } = require('../models');

module.export = {
    addReaction(req, res)
    {
        Thoughts.findOneAndUpdate({_id: req.params.id},{$push:{reactions:req.body}},{new:true,runValidators:true})
        .populate({path:"reactions",select:"-__v"})
        .select("-__v").then(reactions => res.json(reactions))
        .catch(error => res.json(error))
    },
    
}