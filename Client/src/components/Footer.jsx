import React from "react";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-image">
        <img
          src="https://assisiwellnessandhospitalitysevices.com/images/logo.png"
          height={100}
          alt=""
        />
      </div>
      <div className="address">
        Assisi Wellness and Hospitality Services LLP IDENTIFICATION no ACB-4142
        REGD OFF Plot - 745 PILLIYAR KOIL STREET TNHB - THIRUKACHUR MARAIMALAI
        NAGAR - 603209 CHENGALPATTU(Dist).
      </div>
      <div className="contacts">
        <p>
          <i className="fas fa-phone-alt"></i>+91 9790162317
        </p>
        <p>support@assisiwellnesservices.com</p>
        <p>24/7 Service Available</p>
      </div>
      <div className="cards"></div>
    </section>
  );
};

export default Footer;
