import mongoose from 'mongoose'
const Schema = mongoose.Schema

const auctionSchema = new Schema({
  name: String,
})

module.exports = mongoose.model('Auction', auctionSchema)
