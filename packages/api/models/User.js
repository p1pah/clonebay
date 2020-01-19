import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true },
  accessToken: { type: String },
})

module.exports = mongoose.model('User', userSchema)
