import React, { useState, useEffect } from "react"
import { Redirect } from "@reach/router"
import { Link, navigate } from "gatsby"
import { useLazyQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Layout from "../components/layout"

const LOGIN_USER = gql`
  query loginQuery($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      status
    }
  }
`

const LoginPage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const onEmailChange = e => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const onPWChange = e => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const onSubmitClick = e => {
    e.preventDefault()
    loadLogin()
    console.log(data)
    if (data.login.status === true) {
      navigate("/")
    }
    setEmail("")
    setPassword("")
  }

  const [loadLogin, { data }] = useLazyQuery(LOGIN_USER, {
    variables: { email: email, password: password },
  })

  return (
    <Layout>
      <div>
        <h2>Login</h2>
        <form>
          <div>
            <label type="text">Email</label>
            <input
              value={email}
              type="email"
              className="form-control"
              name="email"
              onChange={onEmailChange}
            />
          </div>
          <div>
            <label type="text">Password</label>
            <input
              value={password}
              type="password"
              className="form-control"
              name="password"
              onChange={onPWChange}
            />
          </div>
          <div className="form-group">
            <button onClick={onSubmitClick} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default LoginPage
