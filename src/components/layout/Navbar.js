import React from "react"

const Navbar = () => {
  return (
    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            home
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            about us
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            services
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            testimonials
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            artists
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link navigation__link--cta">
            book now
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
