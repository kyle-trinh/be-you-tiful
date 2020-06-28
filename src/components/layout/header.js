import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderContact from "./HeaderContact"
import Navbar from "./Navbar"
import SiteDescription from "./SiteDescription"

const Header = ({ siteTitle }) => (
  <header>
    <HeaderContact />
    <Navbar />
    <SiteDescription />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
