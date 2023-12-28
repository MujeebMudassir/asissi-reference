import React from "react";

const BookingServices = () => {
  return (
    <section className="book-service">
      <h2>Book a Assisi Service today</h2>
      <div className="service-container">
        <div className="service-image">
          <img
            src="https://assisiwellnessandhospitalitysevices.com/images/s1.avif"
            alt=""
          />
        </div>
        <div className="form">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPhoneNumber1" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPhoneNumber1"
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I would like to recieve Whatsapp notifications from Assisi
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "rgb(35,59,132)" }}
            >
              REQUEST A QUOTE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingServices;
