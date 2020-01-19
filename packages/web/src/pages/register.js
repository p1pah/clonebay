import React, { useState } from "react"
import { Link } from "gatsby"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Layout from "../components/layout"

// just a little ability to add via graphql
const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(input: { email: $email, password: $password }) {
      email
      password
    }
  }
`

const RegisterPage = () => {
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
  const [createUser] = useMutation(CREATE_USER)

  return (
    <Layout>
      <div>
        <h2>Register</h2>
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
                createUser({ variables: { email, password } })
                setEmail('')
                setPassword('')
              }}
              className="btn btn-primary"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default RegisterPage
