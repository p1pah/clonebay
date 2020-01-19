import jwt from 'jsonwebtoken'
import User from '../models/User'
import bcrypt from 'bcryptjs'

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
    const user = await User.findOne({ email: email }, (err, res) => {
      if (err) {
        throw Error('Error - User.findOne' + e)
      }
    })
    return user
  } catch (e) {
    throw Error(e)
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
exports.login = async (email, password) => {
  try {
    const user = this.getUserByEmail(email)
    if (user == null) {
      return null
    }
    const hashedPassword = bcrypt.hash(password, 10)
    if (await bcrypt.compare(password, hashedPassword)) {
      const newUser = new User({ email: email, password: hashedPassword })
      const accessToken = jwt.sign(
        { userId: newUser._id },
        process.env.JWT_SECRET,
        {
          expiresIn: '1d',
        },
      )
      newUser.accessToken = accessToken

      User.findOneAndUpdate({ email: email }, newUser)
      return true
    } else {
      return false
    }
  } catch (e) {
    throw Error('Error userServices.login - ' + e)
  }
}
