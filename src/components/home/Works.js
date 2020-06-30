import React, { useEffect, useRef } from "react"
import Swiper from "swiper"
import Photo1 from "../../images/photo-1.png"
import Photo2 from "../../images/photo-2.png"
import Photo3 from "../../images/photo-3.png"

const Works = () => {
  const slider = useRef(null)
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      // Optional parameters

      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
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
  }, [slider])
  return (
    <section className="section-works">
      <div className="container">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Our works</h2>
          <p className="section-sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            explicabo impedit nesciunt libero molestiae. Ea autem cum doloremque
            illo unde.
          </p>
        </div>
        <div className="swiper-outer-container">
          {" "}
          <div className="swiper-container" ref={slider}>
            <div className="swiper-wrapper">
              <div className="swiper-slide ">
                <img
                  src={Photo1}
                  alt="photo 1"
                  className="swiper-slide__image"
                />
              </div>
              <div className="swiper-slide swiper-slide--2">
                {" "}
                <img
                  src={Photo2}
                  alt="photo 1"
                  className="swiper-slide__image"
                />
              </div>
              <div className="swiper-slide swiper-slide--3">
                {" "}
                <img
                  src={Photo3}
                  alt="photo 1"
                  className="swiper-slide__image"
                />
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

export default Works
