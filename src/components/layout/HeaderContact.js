import React from "react"
import { InstagramIcon, PhoneIcon } from "../icons"
import Logo from "../../images/logo/logo.png"

const HeaderContact = () => {
  return (
    <div className="header-contact">
      <div className="row--lg">
        <div className="header-contact__social">
          {/* <a href="https://www.facebook.com" className="header-contact__link">
            <FacebookIcon />
          </a> */}
          <a
            href="https://www.instagram.com/jm_nails_coquitlam/"
            target="_blank"
            rel="noreferrer"
            className="header-contact__link"
            style={{ lineHeight: 0 }}
          >
            <InstagramIcon />
          </a>
          <a
            href="tel:123321"
            style={{ display: "flex", alignItems: "center", lineHeight: 0 }}
          >
            <PhoneIcon />
            <p style={{ marginLeft: "1rem" }}>(XXX) XXX - XXXX</p>
          </a>
          {/* <a href="www.pinterest.com" className="header-contact__link">
            <PinterestIcon />
          </a> */}
        </div>
        <div className="header-contact__logo-box">
          <img src={Logo} alt="logo" className="header-contact__logo" />
        </div>
        <h2> </h2>
      </div>
    </div>
  )
}

export default HeaderContact
