import React, { useState } from "react"
import { Link } from "gatsby"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Layout from "../components/layout"

// just a little ability to add via graphql
const LOGIN_USER = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(input: { email: $email, password: $password }) {
      email
      password
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
  const [loginUser] = useMutation(LOGIN_USER)

  return (
    <Layout>
      <div>
        <h2>Login</h2>
        <form>
          <div>
            <label type="text">Email</label>
            <input
            value = {email}
              type="email"
              className="form-control"
              name="email"
              onChange={onEmailChange}
            />
          </div>
          <div>
            <label type="text">Password</label>
            <input 
              value = {password}
              type="password"
              className="form-control"
              name="password"
              onChange={onPWChange}
            />
          </div>
          <div className="form-group">
            <button
              onClick={e => {
                console.log(password)
                console.log(email)
                e.preventDefault()
                loginUser({ variables: { email, password } })
                setEmail('')
                setPassword('')
              }}
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default LoginPage
