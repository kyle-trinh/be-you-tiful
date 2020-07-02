import { useState } from "react"
import PropTypes from "prop-types"
import React from "react"
import HeaderContact from "./HeaderContact"
import Navbar from "./Navbar"
import SiteDescription from "./SiteDescription"
import HamburgerNav from "./HamburgerNav"

const Header = ({ siteTitle, onHandleClick, showNav, onHeaderClick }) => {
  return (
    <header onClick={onHeaderClick}>
      <HamburgerNav onHandleClick={onHandleClick} showNav={showNav} />
      <HeaderContact />
      <Navbar className={showNav ? "show" : ""} />
      <SiteDescription />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
