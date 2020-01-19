const jwt = require('jsonwebtoken')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

exports.getUser = async _id => {
  try {
    const user = await User.findById(_id)
    return user
  } catch (error) {
    throw new Error('Error on userServices.getUser')()
  }
}

exports.getUserByEmail = async email => {
  try {
    const user = await User.findOne({ email: email })
    return user
  } catch (e) {
    throw Error('Error on userServices.getUserByEmail - ' + e)
  }
}

exports.getUsers = async () => {
  try {
    const users = await User.find()
    return users
  } catch (error) {
    throw new Error('Error on userServices.getUsers.')
  }
}

exports.createUser = async input => {
  try {
    const hashedPassword = await bcrypt.hash(input.password, 10)
    const email = input.email

    const newUser = new User({ email: email, password: hashedPassword })
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

exports.deleteUser = async id => {
  try {
    await User.findByIdAndDelete(id)
    return User
  } catch (error) {
    throw new Error('Error on userServices.deleteUser')
  }
}

exports.updateUser = async (id, _user) => {
  try {
    await User.findByIdAndUpdate(id, _user)
    return User
  } catch (error) {
    throw new Error('Error on userServices.updateUser')
  }
}

//returns true if authenticated
//false if not
//null if user not found
exports.login = async ({ email, password }) => {
  try {
    //console.log(email, password)
    const user = await this.getUserByEmail(email)
    //console.log(user)
    if (user == null) {
      return { status: false }
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const isSame = await bcrypt.compare(password, hashedPassword)
    if (isSame) {
      const accessToken = await jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: '1d',
        },
      )
      user.accessToken = accessToken
      console.log(user)
      await User.findOneAndUpdate({ email: email }, user, {
        new: false,
        upsert: true,
        setDefaultsOnInsert: true,
      })
      return { status: true }
    } else {
      return { status: false }
    }
  } catch (e) {
    throw Error('Error userServices.login - ' + e)
  }
}
