const UserService = require('../services/userServices')

//Get Single User Info
exports.getUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req
    const user = await UserService.getUser(id)
    if (user == null) {
      return res.status(404).json({ status: 404, message: 'User not found.' })
    }
    return res
      .status(200)
      .json({ status: 200, data: user, message: 'Successfully retrieved user' })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

//Post Single User
exports.createUser = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req
    const jsonBody = { email: email, password: password }
    const newUser = await UserService.createUser(jsonBody)
    return res.status(201).json({
      status: 201,
      data: newUser,
      message: 'Successfully created new user',
    })
  } catch (e) {
    console.log(e)
    return res.status(400).json({ status: 400, message: e.message })
  }
}
