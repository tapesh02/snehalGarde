import React from "react";
import { Typography } from "@mui/material";
import { familyLaw, civilLaw, corporateLaw } from "../../../assets/data.js";

const Practice = () => {
  const RenderFamilyLawSection = () =>
    familyLaw.map(({ id, familyLawTitle, familyLawDescription }) => {
      return (
        <div className="content" key={id}>
          <Typography variant="h5">{familyLawTitle}</Typography>
          <Typography variant="body1">{familyLawDescription}</Typography>
        </div>
      );
    });

  const RenderCivilLawSection = () =>
    civilLaw.map(({ id, civilLawTitle, civilLawDescription }) => {
      return (
        <div className="content" key={id}>
          <Typography variant="h5">{civilLawTitle}</Typography>
          <Typography variant="body1">{civilLawDescription}</Typography>
        </div>
      );
    });

  const RenderCorporateLawSection = () =>
    corporateLaw.map(({ id, corporateLawTitle, corporateLawDescription }) => {
      return (
        <div className="content" key={id}>
          <Typography variant="h5">{corporateLawTitle}</Typography>
          <Typography variant="body1">{corporateLawDescription}</Typography>
        </div>
      );
    });

  return (
    <>
      <div className="practiceBg">
        <div className="practiceBg2"></div>
      </div>
      <div className="practice-hero-wrapper">
        <div className="practice-header-wrapper">
          <Typography variant="h3">Trusted Legal Expertise for Your Family, Civil, and Corporate Needs</Typography>
          <Typography variant="h6">
            At Snehal Garde Law Firm, we provide comprehensive legal services to individuals and businesses in family
            law, civil law, and corporate law. Our team of experienced attorneys is dedicated to protecting your rights
            and achieving the best possible outcomes for your legal matters.
          </Typography>
        </div>
        <div className="practice-hero-image">
          <img
            src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="practice"
          />
        </div>
      </div>
      {/* Family Law */}
      <section className="practice-section-wrapper-main">
        <div className="practice-section-header-wrapper">
          <Typography variant="subtitle1" className="section-header">
            Family Law
          </Typography>
          <Typography variant="h3">Protecting Your Family's Future</Typography>
          <Typography variant="h6">
            Our family law practice covers a wide range of legal matters, including divorce, child custody, child
            support, alimony, and adoption. We understand the emotional complexities of these issues and work tirelessly
            to safeguard your rights and interests.
          </Typography>
        </div>
        <div className="practice-section-content-wrapper">
          <div className="section-content">
            <RenderFamilyLawSection />
          </div>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="practice-content"
            />
          </div>
        </div>
      </section>
      {/* Civil Law */}
      <section className="practice-section-wrapper-main civil-law-main">
        <div className="practice-section-header-wrapper">
          <Typography variant="subtitle1" className="section-header">
            Civil Law
          </Typography>
          <Typography variant="h3">Protecting Your Rights in Civil Matters</Typography>
          <Typography variant="h6">
            Our civil law practice covers a wide range of legal matters, including personal injury, real estate, and
            contract disputes. We are committed to advocating for your rights and ensuring you receive the compensation
            or resolution you deserve.
          </Typography>
        </div>
        <div className="practice-section-content-wrapper">
          <div className="section-content">
            <RenderCivilLawSection />
          </div>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="practice-content"
            />
          </div>
        </div>
      </section>
      {/* Corporate Law */}
      <section className="practice-section-wrapper-main">
        <div className="practice-section-header-wrapper">
          <Typography variant="subtitle1" className="section-header">
            Corporate Law
          </Typography>
          <Typography variant="h3">Guiding Businesses to Success</Typography>
          <Typography variant="h6">
            Our corporate law practice provides comprehensive legal services to businesses of all sizes, from startups
            to established corporations. We assist with a wide range of matters, including entity formation, contract
            drafting and review, mergers and acquisitions, and regulatory compliance.
          </Typography>
        </div>
        <div className="practice-section-content-wrapper">
          <div className="section-content">
            <RenderCorporateLawSection />
          </div>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="practice-content"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Practice;
