import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import userService from '../services/userServices'
import itemService from '../services/itemServices'

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    user(id: String!): User,
    login( input: UserInput! ): LoginResponse,
    item(id: String!): Item,
    userItems(id: String!): [Item!]!      
  }
  type Mutation {
    createUser(input: UserInput!): User,
    deleteUser(id: String!): Boolean!,
    createItem(input: ItemInput!): Item,
    deleteItem(id: String!): Boolean!
  }
  input UserInput {
    email: String!,
    password: String!
  }
  input ItemInput {
    name: String!,
    startingPrice: String!,
    pictureUrl: String!,
    owner: String!
  }
  type DeleteUserResponse {
    status: Boolean!
  }
  type DeleteItemResponse {
    status: Boolean!
  }
  type LoginResponse {
    status: Boolean!
  }
  type Item {
    name: String!,
    startingPrice: String!,
    pictureUrl: String!,
    owner: String!,
    id: ID!
  }
  type User {
    id: ID!,
    email: String!,
    items: [Item]
  }
`)

const rootResolver = {
  user: graphqlInput => userService.getUserById(graphqlInput.id),
  createUser: graphqlInput => userService.createUser(graphqlInput.input),
  deleteUser: graphqlInput => userService.deleteUser(graphqlInput.id),
  login: graphqlInput => userService.login(graphqlInput.input),
  item: graphqlInput => itemService.getItem(graphqlInput.id),
  getUserItems: graphqlInput => userService.getUserItems(graphqlInput.input),
  createItem: graphqlInput => itemService.createItem(graphqlInput.input),
  deleteItem: graphqlInput => itemService.deleteItem(graphqlInput.id),
}

const graphql = graphqlHTTP({
  schema,
  rootValue: rootResolver,
  graphiql: true, // this creates the interactive GraphQL API explorer with documentation.
})

module.exports = graphql
