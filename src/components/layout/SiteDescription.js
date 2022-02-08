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
            JM Nails Spa is committed to excellence in all aspects of our
            business and providing a relaxing, positive, fun, creative, healthy
            and safe environment for our valued clients and our staff.
          </p>
          <div className="header-intro__buttons">
            <Link to="/" className="btn btn--white u-margin-right-small">
              Learn more
            </Link>
            <Link to="/#contact" className="btn btn--secondary">
              Book now
            </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  )
}

export default SiteDescription
