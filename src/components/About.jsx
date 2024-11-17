import React from 'react'

const About = () => {
  return (
    <div className="About_main_container">
      <h1>About Us</h1>
      <div className="About_boxes">
        <h4>What Sets Us Apart</h4>
        <p>
          At NimbleNest, creativity and strategy come together to bring brands
          to life. We’re a full-service design studio dedicated to crafting
          powerful, lasting solutions that make brands unforgettable. Our team
          of skilled designers and strategists works to transform ideas into
          compelling visual stories that drive results
        </p>
      </div>
      <div className="About_boxes">
        {/* <h4>What Sets Us Apart</h4> */}
        <p>
          and resonate with audiences. Whether you’re launching a new brand or
          refining an established presence, we approach every project with fresh
          perspectives, innovative thinking, and an unwavering commitment to
          excellence.
        </p>
        <span>At NimbleNest, your success is our masterpiece.</span>
      </div>
    </div>
  );
}

export default About