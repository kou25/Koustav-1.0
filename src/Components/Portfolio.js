import React,{useEffect} from "react";
import { RightOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import VanillaTilt from 'vanilla-tilt';


const Portfolio = ({ data }) => {


  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".portfolio-item"), {
        max: 25,
        speed:400,
        glare: true,
        "max-glare": 1
    });
  }, [data]);

  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{marginTop:'10px'}} key={projects.title}>
          <div key={projects.title} className="portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img loading="lazy" alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <a
                  className="button is-primary is-outlined is-rounded"
                  href={projects.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Visit Website</span>
                  <span className="icon">
                  <RightOutlined />
                  </span>
                </a>
              </div>
            </a>
          </div>
          </div>
        </Col>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="eleven columns collapsed">
          <h1>Here are a few projects I've worked on recently.</h1>
          <div className="twelve columns" id="portfolio-wrapper">
          <Row gutter={[20, 20]}>
            {projects}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
