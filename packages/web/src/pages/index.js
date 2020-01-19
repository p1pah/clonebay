import React from "react"
import Layout from "../components/layout"
import { client } from "../apollo/client"

const IndexPage = () => {
  console.log(client)
  // // let me get them users pls tehe
  // client
  //   .query({
  //     query: gql`
  //       {
  //         users {
  //           email
  //           password
  //         }
  //       }
  //     `,
  //   })
  //   .then(data => console.log(data))

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
