import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
     <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form >
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName"/>
                    </div>
                    <div >
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName"/>
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
