import React from "react"
import { Link } from "gatsby"

const CTA = () => {
  return (
    <section className="section-cta">
      <div className="u-center-text">
        <h2 className="heading-secondary u-margin-bottom-medium">
          What are you waiting for?
        </h2>
        <Link to="/#contact" className="btn btn--secondary">
          Book now
        </Link>
      </div>
    </section>
  )
}

export default CTA
