import React from "react";
import coverImage from "../../assets/cover/Stars2020.jpg";

function About() {
  return (
    <section className="my-5">
      <h3 id="about">Who am I?</h3>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          I am Jeremy I do things and I like stuff!
        </p>
      </div>
    </section>
  );
}

export default About;
