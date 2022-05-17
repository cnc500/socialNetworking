const { User } = require('../models/User')

const usercontrollers = {
    getAllUsers(req, res) {
        User.find({})

        .then(dbuserdata => res.json(dbuserdata))
        .catch(error => console.log(error))
    }
}
module.exports = usercontrollers;