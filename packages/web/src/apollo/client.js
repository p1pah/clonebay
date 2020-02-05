import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3000/graphql", // or your graphql server uri
  resolvers: {},
})
