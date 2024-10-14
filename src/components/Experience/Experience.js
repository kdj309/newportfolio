import React from "react";
import "./Experience.scss";
import ScrollAnimation from "react-animate-on-scroll";

export default function Experience() {
  return (
    <div className="my-2 container Experience-Wrapper">
      <div className="Experience-Container">
        <hr size="830" width="6" id="verticalbar" />
        <div className="grid-container">
          <div className="grid-item">
            <div className="emptyDiv"></div>
          </div>
          {/* 1-grid */}
          <div className="grid-item">
            <ScrollAnimation animateIn="fadeInRight" className="ExperienceDiv">
              <div className="Content" id="project1">
                <h3>LEHJRO PVT</h3>
                <h5>FRONT-END DEVELOPER INTERN</h5>
                <p>JULY 2021 TO SEPTEMBER 2021</p>
              </div>
            </ScrollAnimation>
          </div>
          {/* 2-grid */}
          <div className="grid-item">
            <ScrollAnimation animateIn="fadeInLeft" className="ExperienceDiv">
              <div className="Content" id="project2">
                <h3>CUROMATES</h3>
                <h5>WEB DEVELOPER INTERN</h5>
                <p>JAN 2022 TO FEB 2022</p>
              </div>
            </ScrollAnimation>
          </div>
          {/* 3-grid */}
          <div className="grid-item">
            <div className="middleitem"></div>
          </div>
          {/* 4-grid */}
          <div className="grid-item">
            <div className="emptyDiv"></div>
          </div>
          {/* 5-grid */}
          <div className="grid-item">
            <ScrollAnimation animateIn="fadeInRight" className="ExperienceDiv">
              <div className="Content" id="project3">
                <h3>PERSISTENT SYSTEMS</h3>
                <h5>SENIOR SOFTWARE ENGINEER</h5>
                <p>FEB 2022 - CURRENT</p>
              </div>
            </ScrollAnimation>
          </div>
          {/* 6-grid */}
        </div>
      </div>
      <ScrollAnimation animateIn="fadeIn" className="Mobile-container">
        <div className="mobileContainerItem Content mx-2">
          <h3>LEHJRO PVT </h3>
          <h5>FRONT-END DEVELOPER INTERN</h5>
          <p>JULY 2021 TO SEPTEMBER 2021</p>
        </div>
        <div className="mobileContainerItem Content mx-2">
          <h3>CUROMATES</h3>
          <h5>WEB DEVELOPER INTERN</h5>
          <p>JAN 2022 TO FEB 2022</p>
        </div>
        <div className="mobileContainerItem Content mx-2">
          <h3>PERSISTENT SYSTEMS</h3>
          <h5>SENIOR SOFTWARE ENGINEER</h5>
          <p>FEB 2022 - CURRENT</p>
        </div>
      </ScrollAnimation>
    </div>
  );
}
