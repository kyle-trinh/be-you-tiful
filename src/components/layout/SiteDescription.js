import React from "react"
import { Link } from "gatsby"

const SiteDescription = () => {
  return (
    <div className="header-intro">
      <div className="header-intro__photo"> </div>
      <div className="header-intro__content">
        <div className="header-intro__text">
          <h1 className="heading-primary u-margin-bottom-small">
            Great nails dont happen by chance <br /> They happen by appointment
          </h1>
          <p className="heading-primary--sub u-margin-bottom-small">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            laboriosam magni tempora consequatur amet deleniti! Totam quia, quam
            quaerat reprehenderit voluptatum sunt nam aliquam placeat sapiente
            non autem molestias ducimus?
          </p>
          <div className="header-into__buttons">
            <Link to="/" className="btn btn--white u-margin-right-small">
              Learn more
            </Link>
            <Link to="/" className="btn btn--secondary">
              Book now
            </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  )
}

export default SiteDescription
