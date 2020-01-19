import express from 'express'
const router = express.Router()

const UserController = require('../controllers/userControllers')

router.get('/:id', UserController.getUser)

router.post('/', UserController.createUser, () => console.log('POST REQUEST'))

module.exports = router
