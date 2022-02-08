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
              <Map />
              <span>
                2922 Glen Dr, Suite #117<br></br> Coquitlam, British Columbia
              </span>
            </li>
            <li className="contact__item">
              <a href="tel:6044642200">
                <PhoneIcon />
                <span>(604) 464 - 2200</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
