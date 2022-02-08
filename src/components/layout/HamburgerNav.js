import React from "react"

const HamburgerNav = ({ onHandleClick, showNav }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`nav-btn ${showNav ? "show" : ""}`}
      onClick={e => {
        e.stopPropagation()
        onHandleClick()
      }}
      onKeyDown={() => {}}
    >
      <div className="nav-btn__line"></div>
    </div>
  )
}
export default HamburgerNav
