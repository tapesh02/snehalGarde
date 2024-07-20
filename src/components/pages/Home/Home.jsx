import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="homeBg">
        <div className="homeBg2"></div>
      </div>
      <Container className="header-container">
        <div className="header">
          <Typography variant="h6">Committed to Helping Our Clients Succeed</Typography>
          <Typography variant="h3">Your Trusted Partner for Reliable and Compassionate Legal Solutions</Typography>
        </div>
      </Container>
      <Container>
        <div className="header-description-wrapper" style={{ width: "100%" }}>
          <Typography variant="body1" className="header-description">
            At our firm, we specialize in civil matters, offering personalized legal services to navigate complex
            issues. Whether it's family law, personal injury, or estate planning, our experienced attorneys are
            dedicated to providing you with the highest level of support and advocacy.
          </Typography>
        </div>
      </Container>

      <Container className="testimonials-container">
        <Typography variant="h4" className="testimonials-title">
          What Our Clients Say
        </Typography>
        <Box className="testimonial">
          <Typography variant="body1">
            "The attorneys at this firm are exceptional. They guided me through a challenging legal situation with
            professionalism and compassion."
          </Typography>
          <Typography variant="body2" className="testimonial-author">
            - Jane Doe
          </Typography>
        </Box>
        <Box className="testimonial">
          <Typography variant="body1">
            "I highly recommend this firm for their expertise and dedication. They handled my case with utmost care and
            efficiency."
          </Typography>
          <Typography variant="body2" className="testimonial-author">
            - John Smith
          </Typography>
        </Box>
      </Container>

      <Container className="services-container">
        <Typography variant="h4" className="services-title">
          Our Services
        </Typography>
        <Box className="services-box">
          <Typography variant="h6" className="service-title">
            Family Law
          </Typography>
          <Typography variant="body2" className="service-description">
            Expert guidance on divorce, custody disputes, and more.
          </Typography>
        </Box>
        <Box className="services-box">
          <Typography variant="h6" className="service-title">
            Personal Injury
          </Typography>
          <Typography variant="body2" className="service-description">
            Support and representation for injury claims and compensation.
          </Typography>
        </Box>
        <Box className="services-box">
          <Typography variant="h6" className="service-title">
            Estate Planning
          </Typography>
          <Typography variant="body2" className="service-description">
            Comprehensive planning for wills, trusts, and estate administration.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
