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
      <h1>Welcome to Clonebay</h1>
      <p>
        This site is used to auction things you own to earn that cold hard cash
        ༼ つ ◕_◕ ༽つ
      </p>
      {/* <div style={{ maxWidth: 300px, marginBottom: 1.45rem }}>
    <Image />
  </div> */}
    </Layout>
  )
}

export default IndexPage
