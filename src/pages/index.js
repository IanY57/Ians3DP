import React from "react"
import { Link } from "gatsby"

import Layout from "../components/globals/Layout"

export default () => (
  <Layout>
    <h1>this is a heading</h1>
    <Link to="/products/">Products</Link>
  </Layout>
)
