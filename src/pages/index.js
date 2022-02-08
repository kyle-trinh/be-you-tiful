import React from "react"

import Layout from "../components/layout"
import Welcome from "../components/home/Welcome"
import Works from "../components/home/Works"
import Services from "../components/home/Services"
import Testimonials from "../components/home/Testimonials"
import Team from "../components/home/Team"
import CTA from "../components/home/CTA"
import Contact from "../components/home/Contact"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <Works />
    <Services />
    <Testimonials />
    {/* <Team /> */}
    {/* <CTA /> */}
    <Contact />
  </Layout>
)

export default IndexPage
