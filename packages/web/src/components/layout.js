/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `
  const { data } = useQuery(IS_LOGGED_IN)
  console.log(data)
  const lastNavItem = data && data.isLoggedIn ? "My Account" : "Login"
  const lastLink = data && data.isLoggedIn ? "/myAccount" : "/login"
  const navItems = [
    "Auction View",
    "Upload",
    "Register My Account",
    lastNavItem,
  ]
  const siteLinks = ["/auctionView", "/upload", "/register", lastLink]

  return (
    <>
      <Header siteNavItems={navItems} siteLinks={siteLinks} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with {` `} 💘
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
