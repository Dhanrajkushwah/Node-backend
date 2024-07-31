const userController = require("../controllers/user.controller")
const express = require("express");
const router = express.Router();
///Dev to vercel
router.route('/list')
    .get(userController.list)
router.route('/create')
    .post(userController.create)
module.exports = router;
