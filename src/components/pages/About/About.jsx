import React from "react";
import { Typography } from "@mui/material";
import Herobackground from "../../../assets/images/lawyers.jpg";
import { team } from "../../../assets/data.js";

const About = () => {
  const RenderTeamsCards = () => {
    return team.map(({ id, personalImage, coFounder, designation, details }) => (
      <div className="team-cards-wrapper" key={id}>
        <img src={personalImage} alt="co founder snehal" />
        <Typography variant="h5">{coFounder}</Typography>
        <Typography variant="h6">{designation}</Typography>
        <Typography variant="body1">{details}</Typography>
      </div>
    ));
  };

  return (
    <>
      <div className="aboutBg">
        <div className="aboutBg2"></div>
      </div>
      <div className="about-us-main-wrapper">
        <div className="about-us-content-wrapper">
          <div className="about-us-header">
            <Typography variant="h5">Snehal Garde Law Firm</Typography>
          </div>
          <div className="about-us-content">
            <Typography variant="h6">
              Snehal Garde Law Firm is a leading full-service law firm dedicated to providing exceptional legal services
              to individuals and businesses. Our team of experienced attorneys is committed to delivering personalized,
              strategic, and cost-effective solutions to our clients
            </Typography>
            <Typography variant="h6">
              With a focus on client service, we strive to understand the unique needs and goals of each client, and we
              work tirelessly to achieve the best possible outcomes. Our firm's core values of integrity,
              professionalism, and innovation guide us in everything we do.
            </Typography>
          </div>
        </div>
        <div className="about-us-hero-image-wrapper">
          <img src={Herobackground} alt="Herobackground" />
        </div>
      </div>
      <div className="team-main-wrapper">
        <div className="team-header-wrapper">
          <Typography variant="h4">Meet Our Founding Partners</Typography>
          <Typography variant="h6">
            Our team of experienced attorneys is dedicated to providing exceptional legal services.
          </Typography>
        </div>
        <div className="teams-card-wrapper-main">
          <RenderTeamsCards />
        </div>
      </div>
    </>
  );
};

export default About;
