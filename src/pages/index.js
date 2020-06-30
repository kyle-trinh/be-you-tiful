import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Welcome from "../components/home/Welcome"
import Works from "../components/home/Works"
import Services from "../components/home/Services"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <Works />
    <Services />
  </Layout>
)

export default IndexPage
