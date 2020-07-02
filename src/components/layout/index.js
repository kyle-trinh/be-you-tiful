/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
// import "./layout.css"
import "../../styles/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [showNav, setShowNav] = useState(false)

  const onHandleClick = () => setShowNav(!showNav)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        onHandleClick={onHandleClick}
        showNav={showNav}
        onHeaderClick={() => setShowNav(false)}
      />

      <main onClick={() => setShowNav(false)}>{children}</main>

      <Footer onClick={() => setShowNav(false)} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
