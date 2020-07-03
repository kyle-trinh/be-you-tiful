import React, { useEffect, useRef } from "react"
import Swiper from "swiper"
import Photo from "../../images/photo-1.png"

const Testimonials = () => {
  const slider = useRef(null)
  useEffect(() => {
    const swiper = new Swiper(".swiper-2", {
      // Optional parameters

      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // // And if we need scrollbar
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },
    })
  }, [])
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary">What our client says</h2>
      </div>
      <div className="container">
        <div className="swiper-outer-container">
          {" "}
          <div className="swiper-container swiper-2" ref={slider}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="swiper-slide__comment u-center-text u-margin-bottom-medium">
                  <p>
                    "As always my nails are amazing. You are such great
                    professionals. I don't know how I ever got by before you
                    came in to my life! You girls are the best!""
                  </p>
                </div>
                <figure className="swiper-slide__user-photo">
                  <img src={Photo} alt="" className="u-margin-bottom-small" />
                  <figcaption>
                    <span className="u-bold-text">Mia Nguyen</span>, CA
                  </figcaption>
                </figure>
              </div>
              <div className="swiper-slide">
                {" "}
                <div className="swiper-slide__comment u-center-text u-margin-bottom-medium">
                  <p>
                    "As always my nails are amazing. You are such great
                    professionals. I don't know how I ever got by before you
                    came in to my life! You girls are the best!""
                  </p>
                </div>
                <figure className="swiper-slide__user-photo">
                  <img src={Photo} alt="" className="u-margin-bottom-small" />
                  <figcaption>
                    <span className="u-bold-text">Mia Nguyen</span>, CA
                  </figcaption>
                </figure>
              </div>
              <div className="swiper-slide">
                {" "}
                <div className="swiper-slide__comment u-center-text u-margin-bottom-medium">
                  <p>
                    "As always my nails are amazing. You are such great
                    professionals. I don't know how I ever got by before you
                    came in to my life! You girls are the best!""
                  </p>
                </div>
                <figure className="swiper-slide__user-photo">
                  <img src={Photo} alt="" className="u-margin-bottom-small" />
                  <figcaption>
                    <span className="u-bold-text">Mia Nguyen</span>, CA
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="swiper-pagination"></div>

            <div className="swiper-scrollbar"></div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
