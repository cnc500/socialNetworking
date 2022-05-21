const router = require('express').Router()
const userroutes = require('./user-routes')
const thoughtroutes = require('./thought-routes')

router.use('/thoughts', thoughtroutes)
router.use('/users', userroutes)
module.exports = router;