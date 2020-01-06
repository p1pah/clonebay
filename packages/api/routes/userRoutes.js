const express = require('express')
const router = express.Router();

var UserController = require('../controllers/userControllers')

router.get('/:id', UserController.getUser )

router.post('/', UserController.createUser, () => console.log('POST REQUEST') )

module.exports = router;