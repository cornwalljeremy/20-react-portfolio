import React from "react";
import coverImage from "../../assets/cover/Stars2020-1.jpg";

function About() {
  return (
    <section className="my-5">
      <h3 id="about">About Me</h3>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "90%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          I am Jeremy I do things and I like stuff! I am a musician by heart
          Sound engineer by day (and night) and a budding software enginner!
        </p>
      </div>
    </section>
  );
}

export default About;