import React, { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({ submitting: false, status: { ok, msg } })
    if (ok) {
      form.reset()
    }
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    try {
      const res = await axios({
        method: "post",
        url: "https://getform.io/f/7836d0bd-02f1-4b38-9f15-10b7eef2bac3",
        data: new FormData(form),
      })

      handleServerResponse(true, "Form submission success. Thanks!", form)
      setTimeout(() => {
        setServerState({ ...serverState, status: null })
      }, 3000)
    } catch (err) {
      handleServerResponse(false, e.response.data.error, form)
      setTimeout(() => {
        setServerState({ ...serverState, status: null })
      }, 3000)
    }
  }
  return (
    <section className="section-contact" id="contact">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Contact Us</h2>
      </div>
      <div className="container">
        <form
          onSubmit={handleOnSubmit}
          className="form"
          autoComplete="new-password"
        >
          <div className="form-group">
            <label htmlFor="name" className="form__label" required="required">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form__input"
              required
              placeholder="Enter your name..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="form__label" required="required">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              className="form__input"
              placeholder="Enter your email..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form__label" required="required">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form__input"
              placeholder="Enter your phone number..."
            />
          </div>
          <button className="btn btn--primary u-margin-bottom-medium">
            Submit
          </button>
          {serverState.status && (
            <div className="form__msg-div">
              <p className="form__msg u-center-text">
                {serverState.status.msg}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
