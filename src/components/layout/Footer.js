import React from "react"
import { Map, PhoneIcon, Mail } from "../icons"
import Logo from "../../images/logo/logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="row--lg">
        <div className="header-contact__social"></div>
        <div className="header-contact__logo-box">
          <img src={Logo} alt="logo" className="header-contact__logo" />
        </div>
        <div className="header-contact__info">
          <h3>Contact</h3>
          <ul className="contact__list">
            <li className="contact__item">
              <Map />{" "}
              <span>
                XXXX XXXX XXXXX XXXXX,<br></br> XXXX XXXXX, CA XXXXX
              </span>
            </li>
            <li className="contact__item">
              <PhoneIcon />
              <span>(XXX) XXX - XXXX</span>
            </li>
            <li className="contact__item">
              <Mail />
              <span>xxxxxxx@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
