import PropTypes from "prop-types"
import React from "react"
import HeaderContact from "./HeaderContact"
import Navbar from "./Navbar"
import SiteDescription from "./SiteDescription"
import HamburgerNav from "./HamburgerNav"

const Header = ({ onHandleClick, showNav }) => {
  return (
    <header>
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
