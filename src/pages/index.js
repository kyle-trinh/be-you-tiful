import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Welcome from "../components/home/Welcome"
import Works from "../components/home/Works"
import Services from "../components/home/Services"
import Testimonials from "../components/home/Testimonials"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <Works />
    <Services />
    <Testimonials />
  </Layout>
)

export default IndexPage
