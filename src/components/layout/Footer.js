import React from "react"
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  Map,
  PhoneIcon,
  Mail,
} from "../icons"
import Logo from "../../images/logo/logo.png"

const Footer = () => {
  return (
    <footer>
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
          <h3>Contact</h3>
          <ul className="contact__list">
            <li className="contact__item">
              <Map />{" "}
              <span>
                16565 Mount Michaelis Circle,<br></br> Fountain Valley, CA 92708
              </span>
            </li>
            <li className="contact__item">
              <PhoneIcon />
              <span>(714) 726 - 7760</span>
            </li>
            <li className="contact__item">
              <Mail />
              <span>trinhthaibinh.ecom@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
