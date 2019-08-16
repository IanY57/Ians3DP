import React from "react"
import { Link } from "gatsby"

import Layout from "../components/globals/Layout"

const products = () => {
  return (
    <Layout>
      hello from Products page
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default products
