const { adminLogin, adminLogout } = require('../controller/admin.controller.js')

const router = require('express').Router()

router
    .post('/adminLogin', adminLogin)
    .post('/adminLogout', adminLogout)

module.exports = router