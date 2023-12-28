import React from "react";

const CareGivers = () => {
  return (
    <section className="caregivers">
      <h2>OUR ASSISI CAREGIVERS</h2>
      <p>
        Our Assisi Caregiver profiles range from qualified nursing attenders to
        compassionate companions enabling seniors to live a comfortable life at
        home
      </p>
      <div className="caregiver-container">
        <div className="caregiver-image">
          <img
            src="https://assisiwellnessandhospitalitysevices.com/images/c4.jpg"
            className="img-thumbnail"
            alt="..."
          />
          <h4>EXPERIENCED</h4>
          <h4>CAREGIVER</h4>
        </div>
        <div className="caregiver-image">
          <img
            src="https://assisiwellnessandhospitalitysevices.com/images/c5.jpg"
            className="img-thumbnail"
            alt="..."
          />
          <h4>NURSING</h4>
          <h4>ATTENDER</h4>
        </div>
        <div className="caregiver-image">
          <img
            src="https://assisiwellnessandhospitalitysevices.com/images/c7.jpg"
            className="img-thumbnail"
            alt="..."
          />
          <h4>EXPERIENCED</h4>
          <h4>CAREGIVER</h4>
        </div>
      </div>
    </section>
  );
};

export default CareGivers;
