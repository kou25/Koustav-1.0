import React,{useEffect} from "react";
import 'antd/dist/antd.css'; 
import { Card } from 'antd';
import VanillaTilt from 'vanilla-tilt';

const { Meta } = Card;


const Skill = ({ data }) => {

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".ant-card"), {
        max: 25,
        speed:400,
        glare: true,
        "max-glare": 1
    });
  }, [data]);

  

  if (data) {
    var skills = data.skills.map(function (skills) {
      return (
        <div className='four column' key={skills.name}>
         <Card
            style={{minWidth: '100%', margin:'5px'}}
            hoverable
            cover={<img loading="lazy" alt={skills.name} src={skills?.img} />}
          >
            <Meta title={skills.name}/>
          </Card>
        </div>
      );
    });
  }

  return (
    <section id="skill">
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row" id="row-skill">
            <div className="twelve">
           {skills}
           </div>
           <div className="circle-1"></div>
           <div className="circle-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
