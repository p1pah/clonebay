const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//Could maybe be considered middleware functions and go to seperate folder
async function hashPassword(password){
    return await bcrypt.hash(password, 10)
}

async function validatePassword(plainPassword, hashedPassword){
    return await bcrypt.compare(plainPassword, hashPassword)
}

exports.getUser = async (_id, page, limit) => {
    try {
        var users = await User.findById(_id)
        return users;
    }catch (e){
        throw Error('Error on getUser service.')
    }
}

exports.createUser = async ( email, password ) => {
    try {
        const hashedPassword = await hashPassword(password);
        const newUser = new User( { email: email, password: hashedPassword})
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })
        newUser.accessToken = accessToken;
        await newUser.save();
        return newUser;
    }catch(e){
        throw Error('Error on createUser service.')
    }
}