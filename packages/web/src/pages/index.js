import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Layout from "../components/layout"
import { client } from "../apollo/client"

const IndexPage = () => {
  console.log(client)
  // let me get them users pls tehe
  client
    .query({
      query: gql`
        {
          users {
            email
            password
          }
        }
      `,
    })
    .then(data => console.log(data))
  // just a little ability to add via graphql
  client
    .mutate({
      mutation: gql`
        mutation {
          createUser(input: { email: "weeeee@weeeee.com", password: "uoeno" }) {
            email
            password
          }
        }
      `,
    })
    .then(data => console.log(data))
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {/* <div style={{ maxWidth: 300px, marginBottom: 1.45rem }}>
    <Image />
  </div> */}

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
