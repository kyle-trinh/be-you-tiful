import React from "react"
import Photo1 from "../../images/photo-1.png"

const Team = () => {
  return (
    <section className="section-team">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Our team</h2>
      </div>
      <div className="container">
        <div className="member">
          <div className="member__photo">
            <img src={Photo1} alt="" />
            <div className="member__background"></div>
          </div>
          <div className="member__info">
            <h4 className="member__name">Mia Nguyen</h4>
            <p className="member__intro">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              adipisci perspiciatis praesentium labore reiciendis esse autem
              reprehenderit quae quasi incidunt est iure non earum pariatur,
              magni ipsa officia ut! Nihil.
            </p>
          </div>
        </div>
        <div className="member">
          <div className="member__photo">
            <img src={Photo1} alt="" />
            <div className="member__background"></div>
          </div>
          <div className="member__info">
            <h4 className="member__name">Mia Nguyen</h4>
            <p className="member__intro">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              adipisci perspiciatis praesentium labore reiciendis esse autem
              reprehenderit quae quasi incidunt est iure non earum pariatur,
              magni ipsa officia ut! Nihil.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
