import React from "react";

const About = ({ data }) => {
  if (data) {
    var age = data.age;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
    var experiences = '2 year';
    var country = 'India'
  }


  return (
    <section id="about">
      <div className="row">
        <div className="five columns">
          <img
            loading="lazy"
            className="profile-pic"
            src={profilepic}
            alt="Profile Pic"
          />
        </div>
        <div className="seven columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="about-detail">
                <div className="about-detail-list"><span className="about-bold">Age</span> {age}</div>
                <div className="about-detail-list"><span className="about-bold">Phone</span> {phone}</div>
                <div className="about-detail-list"><span className="about-bold">Email</span> {email}</div>
                <div className="about-detail-list"><span className="about-bold">Experiences</span> {experiences}</div>
                <div className="about-detail-list"><span className="about-bold">Country</span> {country}</div>
          </div>
          <div className="row">
            <div className="columns download">
              <p>
                <a href={resumeDownload} target="_blank" rel="noreferrer" className="button" download>
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
