import React from "react"

function createString(str) {
  const remaining = 70 - str.length
  let result = str
  for (let i = 0; i < remaining / 3; i++) {
    result += ".\t"
  }
  return result
}

const adults = {
  "regular manicure": 26,
  "Shellac Manicure": 37,
  "Regular Pedicure": 39,
  "Shellac Pedicure": 52,
  "Deluxe Pedicure regular": 54,
  "Deluxe pedicure shellac": 67,
  "Deluxe Pedicure regular plus": 59,
  "Deluxe pedicure shellac plus": 72,
  "Regular Mani Pedi": 59,
  "Shellac Mani Pedi": 82,
  "Color change on hands w Regular": 17,
  "Color change on hands w Shellac": 32,
  "Color change on toes w Regular": 22,
  "Color change on toes w Shellac": 37,
  "Fullset Acrylic": 60,
  "Fill Acrylic": 50,
  "Fullset liquid gel": 67,
  "Fill liquid gel": 57,
  French: "5+",
  Ombre: "10+",
  Design: "5+",
  "Shellac Removal": 12,
  "Acrylic Removal": 12,
}

const kids = {
  "Kid Regular Manicure": 22,
  "Kid Shellac Manicure": 27,
  "Kid Regular Pedicure": 32,
  "Kid Shellac Pedicure": 37,
  "Kid Regular Mani Pedi": 42,
  "Kid Shellac Mani Pedi": 52,
  "Color change on hands w Regular": 12,
  "Color change on hands w Shellac": 22,
  "Color change on toes w Regular": 17,
  "Color change on toes w Shellac": 27,
}

const waxing = {
  Eyebrows: 14,
  "Tint eyebrows": 17,
  "Upper lips/ chin": 12,
  "Full face": 27,
  "Chest/tummy": 32,
  "Full back": 52,
  "Full arms": "27+",
  "half arms": "22+",
  "Under arms": "17+",
  "Full legs": "47+",
  "half legs": "27+",
  "Bikini line": 27,
  Brazilian: 47,
  "Full body": 152,
}

function returnString(obj) {
  return Object.keys(obj).map(key => (
    <li className="services-list__item">
      <span>{key}</span>
      <span>${obj[key]}</span>
    </li>
  ))
}

const Services = () => {
  return (
    <section className="section-services" id="services">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Our Services</h2>
      </div>
      <div className="container">
        <ul className="services-list">{returnString(adults)}</ul>
        <div className="u-center-text u-margin-bottom-big u-margin-top-big">
          <h2 className="heading-secondary">{"Kids < 12 years"}</h2>
        </div>
        <ul className="services-list">{returnString(kids)}</ul>
        <div className="u-center-text u-margin-bottom-big u-margin-top-big">
          <h2 className="heading-secondary">Waxing</h2>
        </div>
        <ul className="services-list">{returnString(waxing)}</ul>
      </div>
    </section>
  )
}

export default Services
