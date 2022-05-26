const {Schema, model} = require('mongoose');

// Schema to create User model
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
        // Vituals to be include with response overriding the default
        virtuals: true,
        getters: true
    },
    id: false   
}
)

// Creates a virtual property "friendcount" and getter function to return the number of friends
usersSchema.virtual("friendCount").get(function(){
    return this.friends.length;
})

// Initialize our User model
const User = model("User", usersSchema)

module.exports = User