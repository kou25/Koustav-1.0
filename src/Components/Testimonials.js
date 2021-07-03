import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [offSetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="testimonials">
      <h1 className="big-title translate" style={{ transform: `translateY(${offSetY * 0.1 * 0.05}px)` }}>
        Contact me.
      </h1>
      <img
        
        src="images/person.png"
        className="person translate"
        alt=""
        style={{ transform: `translateY(${offSetY * -0.1 * 0.25}px)` }}
      />
      <img
        
        src="images/mountain1.png"
        className="mountain1 translate"
        alt=""
        style={{ transform: `translateY(${offSetY * 0.1 * -0.2}px)` }}
      />
      <img 
        src="images/mountain2.png"
        className="mountain2 translate"
        alt=""
        style={{ transform: `translateY(${offSetY * 0.1 * 0.25}px)` }}
      />
      <img 
        src="images/mountain3.png"
        className="mountain3 translate"
        alt=""
        style={{ transform: `translateY(${offSetY * 0.1 * 0.25}px)` }}
      />
      <img 
        src="images/sky.png"
        className="sky translate"
        alt=""
        style={{ transform: `translateY(${offSetY * 0.1 * 0.3}px)` }}
      />
    </section>
  );
};

export default Testimonials;
