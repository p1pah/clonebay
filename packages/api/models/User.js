import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item', trim: true }],
})

module.exports = mongoose.model('User', UserSchema)
