import { Container, Typography, TextField, Button, Box, Grid } from "@mui/material";

const FreeConsultation = () => {
  return (
    <>
      <div className="contactBg">
        <div className="contactBg2"></div>
      </div>

      <Container maxWidth="lg" className="contact-container">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box className="consultation-info">
              <Typography variant="h4" component="h4" gutterBottom>
                Free Legal Consultation
              </Typography>
              <Typography variant="body1" paragraph>
                At our law firm, we understand that legal issues can be overwhelming. That's why we're offering a free
                consultation to help you understand your rights and options. Whether you're dealing with a personal
                injury, family law matter, or any other legal concern, our experienced attorneys are here to guide you
                through the process and provide you with the support you need.
              </Typography>
              <Typography variant="body1" paragraph>
                Schedule your free consultation today and take the first step toward resolving your legal matter with
                confidence. Simply fill out the contact form below, and one of our representatives will reach out to you
                to arrange a convenient time for your consultation.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="contact-form">
              <Typography variant="h3" component="h3" gutterBottom>
                Contact Us
              </Typography>
              <form>
                <TextField label="Name" variant="outlined" fullWidth margin="normal" required />
                <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" required />
                <TextField label="Phone" type="phone" variant="outlined" fullWidth margin="normal" required />
                <TextField label="Message" variant="outlined" fullWidth multiline rows={4} margin="normal" required />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="contact-info">
              <Typography variant="h3" component="h3" gutterBottom>
                Our Office
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: contact@lawfirm.com
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone: +123 456 7890
              </Typography>
              <Typography variant="body1" gutterBottom>
                Address: 123 Justice Street, City, Country
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FreeConsultation;
