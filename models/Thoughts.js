const {Schema, model} = require('mongoose');
const User = require('./User');
const reactionSchema = require('./Reaction');

const thoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        max_length: 280
    },
    createdAt: {
    type: Date,
    default: Date.now  
    },
    username: {
    type: String,
    require: true,
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        getters: true,
    },
},
)

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;