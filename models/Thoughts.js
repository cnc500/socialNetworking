const {Schema, model, Types} = require('mongoose');

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        // default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
// Schema to create Thoughts model
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
    reactions: [
    reactionSchema],
},
{
    toJSON: {
        getters: true,
    },
},
)

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;