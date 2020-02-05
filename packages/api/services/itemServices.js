import Item from '../models/Item'
import userService from '../services/userServices'
import User from '../models/User'

exports.getItem = async _id => {
  try {
    const item = await Item.findById(_id)
    return item
  } catch (error) {
    throw new Error('Error on itemServices.getItem - ' + error)
  }
}

exports.deleteItem = async _id => {
  try {
    const item = await Item.findById(_id)
    item.remove()

    return true
  } catch (error) {
    throw new Error('Error on itemServices.deleteItem - ' + error)
  }
}

exports.createItem = async input => {
  const name = input.name
  const startingPrice = input.startingPrice
  const pictureUrl = input.pictureUrl

  const ownerId = input.owner

  try {
    const owner = await userService.getUser(ownerId)
    const newItem = new Item({
      name,
      startingPrice,
      pictureUrl,
      owner: owner._id,
    })

    await newItem.save(error => {
      if (error) {
        throw Error('Error on Item.save')
      }

      owner.items.push(newItem)
      owner.save()
    })
    return newItem
  } catch (error) {
    throw Error('Error on itemServices.createItem - ' + error)
  }
}
