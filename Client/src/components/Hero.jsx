import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img
          src="https://assisiwellnessandhospitalitysevices.com/images/slider1.png"
          alt="image"
        />
      </div>
      <div className="hero-heading">
        <h1>ASSISI Welcomes Senior citizens:</h1>
        <h3 style={{ padding: "1rem 0rem" }}>
          With Assisi you are in caring hands.
        </h3>
        <p>
          You are never old to set another goal or dream a new dream. No matter
          the difficult times you find yourself in, you can overcome.When
          granted many years of life, growing old in age is natural, but growing
          old with grace is a choice. Growing older with grace is possible for
          all who will set their hearts and minds on the Giver of grace,
          Almighty
        </p>
        <div className="buttons">
          <button>WhatsApp Us </button>
          <button>CALL US</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
