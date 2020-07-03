import React from "react"

const Navbar = ({ className }) => {
  return (
    <nav className="navigation__nav">
      <div className="row--lg">
        <ul className={`navigation__list ${className}`}>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#welcome" className="navigation__link">
              about us
            </a>
          </li>
          <li className="navigation__item">
            <a href="#services" className="navigation__link">
              services
            </a>
          </li>
          <li className="navigation__item">
            <a href="#testimonials" className="navigation__link">
              testimonials
            </a>
          </li>
          <li className="navigation__item">
            <a href="#team" className="navigation__link">
              artists
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#contact"
              className="navigation__link navigation__link--cta"
            >
              book now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
