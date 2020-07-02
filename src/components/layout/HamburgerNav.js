import React from "react"

const HamburgerNav = ({ onHandleClick }) => {
  return (
    <div className="nav-btn" onClick={onHandleClick}>
      <div className="nav-btn__line"></div>
      <div className="nav-btn__line"></div>
      <div className="nav-btn__line"></div>
    </div>
  )
}
export default HamburgerNav
