import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Welcome from "../components/home/Welcome"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
  </Layout>
)

export default IndexPage
