import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"

import Layout from "../components/layout"

const handleSubmit = event => {
  event.preventDefault()

  axios
    .get("http://localhost:3000/users/5e13dcee8d3a9f0ff8f5c9b6", {
      method: "HEAD",
      mode: "no-cors",
    })
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
}

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <div style={{ maxWidth: 300px, marginBottom: 1.45rem }}>
      <Image />
    </div> */}
    <button onClick={handleSubmit}>asdasd</button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
