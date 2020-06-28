import React from "react"
import { FacebookIcon, InstagramIcon, PinterestIcon, PhoneIcon } from "../icons"
import Logo from "../../images/logo/logo.png"

const HeaderContact = () => {
  return (
    <div className="header-contact">
      <div className="row--lg">
        <div className="header-contact__social">
          <a href="www.facebook.com" className="header-contact__link">
            <FacebookIcon />
          </a>
          <a href="www.instagram.com" className="header-contact__link">
            <InstagramIcon />
          </a>
          <a href="www.pinterest.com" className="header-contact__link">
            <PinterestIcon />
          </a>
        </div>
        <div className="header-contact__logo-box">
          <img src={Logo} alt="logo" className="header-contact__logo" />
        </div>
        <div className="header-contact__info">
          <PhoneIcon />
          <p>(714) 726 - 7760</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderContact
