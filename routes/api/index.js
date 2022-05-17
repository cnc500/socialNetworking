const router = require('express').Router()
const userroutes = require('./user-routes')

router.use('/users',userroutes)
module.exports = router;