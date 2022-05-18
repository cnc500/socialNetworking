const { User } = require("../models");

const usercontrollers = {
    getAllUsers(req, res) {
        User.find({})

        .then(dbuserdata => res.json(dbuserdata))
        .catch(error => console.log(error))
    }
}
module.exports = usercontrollers;