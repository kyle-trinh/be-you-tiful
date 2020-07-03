import React from "react"

const Welcome = () => {
  return (
    <section className="section-welcome" id="welcome">
      <div className="container">
        <div className="welcome-content">
          <div className="welcome-box welcome-box--1">
            <h3 className="heading-teriary">
              Welcome to <br></br>{" "}
              <span className="text-primary">be-YOU-tiful</span>
            </h3>
            <p className="welcome-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              suscipit doloribus, molestias accusamus quam aut esse quia,
            </p>
          </div>
          <div className="welcome-box welcome-box--2"></div>
          <div className="welcome-box welcome-box--3">
            <h3 className="heading-teriary">Opening hours</h3>
            <ul>
              <li>
                Monday - Friday: <br></br>
                <span className="text-bold">10am - 5pm</span>
              </li>
              <li>
                Saturday: <br></br>
                <span className="text-bold">10am - 5pm</span>
              </li>
              <li>
                Sunday: <br></br>
                <span className="text-bold">10am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Welcome
