import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ItemSchema = new Schema({
  name: { type: String, required: true, trim: true },
  startingPrice: { type: String, trim: true },
  pictureUrl: { type: String, trim: true },
  endTime: { type: String, trim: true },
  highestBid: { type: Schema.Types.ObjectId, ref: 'User', trim: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', trim: true },
})

module.exports = mongoose.model('Item', ItemSchema)
