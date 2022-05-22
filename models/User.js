const {Schema, model} = require('mongoose');
const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
     },
     email: {
        type: String,
        required: true,
        unique: true,
        trim: true
     },
     thoughts: [{
         type: Schema.Types.ObjectId,
         ref: "thoughts"
     }],
     friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
     }]
},
{
    toJSON:{
        virtuals: true,
        getters: true
    },
    id: false   
}
)

usersSchema.virtual("friendCount").get(function(){
    return this.friends.length;

})
const User = model("User", usersSchema)

module.exports = User