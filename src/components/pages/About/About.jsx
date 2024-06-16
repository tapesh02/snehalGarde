import React from "react";
import { Typography } from "@mui/material";
import Herobackground from "../../../assets/images/lawyers.jpg";
import { team, coreValues, experties } from "../../../assets/data.js";

const About = () => {
  const RenderTeamsCards = () => {
    return team.map(({ id, personalImage, coFounder, designation, details }) => (
      <div className="cards-wrapper" key={id}>
        <img src={personalImage} alt="co founder snehal" />
        <Typography variant="h5">{coFounder}</Typography>
        <Typography variant="h6">{designation}</Typography>
        <Typography variant="body1">{details}</Typography>
      </div>
    ));
  };

  const RenderValuesCards = () => {
    return coreValues.map(({ id, valueDescription, valueIcon, valueName }) => (
      <div className="cards-wrapper value-cards" key={id}>
        {valueIcon}
        <Typography variant="h5">{valueName}</Typography>
        <Typography variant="subtitle1">{valueDescription}</Typography>
      </div>
    ));
  };

  const RenderExpertiesCards = () => {
    return experties.map(({ id, expertiesName, expertiesIcon, expertiesDescription }) => (
      <div className="cards-wrapper value-cards experties-cards" key={id}>
        {expertiesIcon}
        <Typography variant="h5">{expertiesName}</Typography>
        <Typography variant="subtitle1">{expertiesDescription}</Typography>
      </div>
    ));
  };

  return (
    <>
      <div className="aboutBg">
        <div className="aboutBg2"></div>
      </div>
      <section className="about-us-main-wrapper">
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
      </section>
      {/*Teams section  */}
      <section className="main-wrapper">
        <div className="header-wrapper">
          <Typography variant="h4">Meet Our Founding Partners</Typography>
          <Typography variant="subtitle1">
            Our team of experienced attorneys is dedicated to providing exceptional legal services.
          </Typography>
        </div>
        <div className="card-wrapper-main">
          <RenderTeamsCards />
        </div>
      </section>
      {/* Experties Section  */}
      <section className="main-wrapper value-cards-wrapper experties-cards-wrapper ">
        <div className="header-wrapper">
          <Typography variant="h4">Our Expertise</Typography>
          <Typography variant="subtitle1">
            Snehal Garde Law Firm, specializes in a wide range of legal disciplines, ensuring we can provide
            comprehensive solutions to our clients.
          </Typography>
        </div>
        <div className="card-wrapper-main  ">
          <RenderExpertiesCards />
        </div>
      </section>
      {/* Value Section  */}
      <section className="main-wrapper value-cards-wrapper ">
        <div className="header-wrapper">
          <Typography variant="h4">Our Core Values</Typography>
          <Typography variant="subtitle1">
            At Snehal Garde Law Firm, we are guided by a set of core values that shape our approach to legal services
            and client relationships.
          </Typography>
        </div>
        <div className="card-wrapper-main ">
          <RenderValuesCards />
        </div>
      </section>
    </>
  );
};

export default About;
