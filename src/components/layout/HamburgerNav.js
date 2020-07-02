import React from "react"

const HamburgerNav = ({ onHandleClick, showNav }) => {
  return (
    <div
      className={`nav-btn ${showNav ? "show" : ""}`}
      onClick={e => {
        e.stopPropagation()
        onHandleClick()
      }}
    >
      <div className="nav-btn__line"></div>
    </div>
  )
}
export default HamburgerNav
