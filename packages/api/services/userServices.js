const jwt = require('jsonwebtoken')
const User = require('../models/User')
// const bcrypt = require('bcrypt')

// Could maybe be considered middleware functions and go to seperate folder
// async function hashPassword(password) {
//   return await bcrypt.hash(password, 10)
// }

// async function validatePassword(plainPassword, hashedPassword) {
//   return await bcrypt.compare(plainPassword, hashPassword)
// }

exports.getUser = async (_id) => {
  try {
    const user = await User.findById(_id)
    return user
  } catch (error) {
    throw new Error('Error on userServices.getUser')()
  }
}

exports.getUsers = async () => {
  try {
    const users = await User.find()
    return users
  }catch(error){
    throw new Error('Error on userServices.getUsers.')
  }
}

exports.createUser = async (input) => {
 
  try {
    
    
    // const hashedPassword = await hashPassword(password);
    const email = input.email;
    const password = input.password;
    
    const newUser = new User({ email: email, password: password })
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      },
    )
    newUser.accessToken = accessToken
    await newUser.save()
    return newUser
  } catch (e) {
    throw Error('Error on userServices.createUser' + e)
  }
}

exports.deleteUser = async (id) => {
  try{
    await User.findByIdAndDelete(id);
    return User;
  }catch(error){
    throw new Error('Error on userServices.deleteUser')
  }
}

exports.updateUser = async (id, _user) => {
  try{
    await User.findByIdAndUpdate(id, _user);
    return User;
  }catch(error){
    throw new Error('Error on userServices.updateUser')
  }
}
