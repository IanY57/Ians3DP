import React from "react"
import { Link } from "gatsby"

import Layout from "../components/globals/Layout"

export default () => (
  <Layout>
    Hello world!
    <Link to="/products/">Products</Link>
  </Layout>
)
