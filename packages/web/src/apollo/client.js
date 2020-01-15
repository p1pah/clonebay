import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { HttpLink } from "apollo-link-http"

export const client = new ApolloClient({
  uri: "http://localhost:3000/graphql", // or your graphql server uri
})
