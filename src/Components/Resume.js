import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import DXC from "./DXC";
import "react-vertical-timeline-component/style.min.css";


const Resume = () => {
  return (
    <section id="resume"  style={{position:'relative'}}>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>My Journey</span>
          </h1>
        </div>
        <div className="nine columns main-col" >
          <div className="row item">
            <div className="twelve columns">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2020-present"
                  iconStyle={{ background: "transparent" }}
                  icon={<DXC id='1'/>}
                >
                  <h3 className="vertical-timeline-element-title">
                    UI Engineer
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Xenonstack Pvt. LTD
                  </h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2016-20"
                  iconStyle={{ background: "transparent" }}
                  icon={<DXC id='2'/>}
                >
                  <h3 className="vertical-timeline-element-title">
                    Lovely Professional University
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Btech CSE
                  </h4>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
         
        </div>
      </div>
      <div className="journey-svg">
            <img loading="lazy" src="images/study.svg" alt="journey_svg"/>
          </div>
    </section>
  );
};

export default Resume;
