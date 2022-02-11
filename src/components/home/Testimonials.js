import React, { useEffect, useRef } from "react"
import Swiper from "swiper"
import Photo1 from "../../images/com-1.png"
import Photo2 from "../../images/com-2.png"
import Photo3 from "../../images/com-3.png"

const Testimonials = () => {
  const slider = useRef(null)
  useEffect(() => {
    new Swiper(".swiper-2", {
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
          <div className="swiper-container swiper-2" ref={slider}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <figure className="swiper-slide__user-photo u-margin-bottom-medium">
                  <img src={Photo1} alt="" className="u-margin-bottom-small" />
                  <figcaption>
                    <span className="u-bold-text">Kellie Park</span> -
                    Coquitlam, BC
                  </figcaption>
                </figure>
                <div className="swiper-slide__comment u-center-text ">
                  <p>
                    "As always my nails are amazing. You are such great
                    professionals. I don't know how I ever got by before you
                    came in to my life! You girls are the best!""
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <figure className="swiper-slide__user-photo u-margin-bottom-medium">
                  <img src={Photo2} alt="" className="u-margin-bottom-small" />
                  <figcaption>
                    <span className="u-bold-text">Karen Jones</span> - Surrey,
                    BC
                  </figcaption>
                </figure>
                <div className="swiper-slide__comment u-center-text ">
                  <p>
                    "Duong and his staff are the kindest and funniest people
                    around. They take pride in their work and are the best nail
                    techs in the state. I will never go anywhere else ever
                    again. You have a lifetime customer in me!"
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <figure className="swiper-slide__user-photo u-margin-bottom-medium">
                  <img src={Photo3} alt="" className="u-margin-bottom-small" />
                  <figcaption>
                    <span className="u-bold-text">Hailey Gavin</span> -
                    Coquitlam, BC
                  </figcaption>
                </figure>
                <div className="swiper-slide__comment u-center-text ">
                  <p>
                    "Amazing service! The owners and employees really stand by
                    the quality of their work, and it shows! Will definitely be
                    a repeat customer."
                  </p>
                </div>
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
