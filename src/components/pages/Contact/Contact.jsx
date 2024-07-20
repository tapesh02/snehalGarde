import { Container, Typography, TextField, Button, Box, Grid } from "@mui/material";

const Contact = () => {
  return (
    <>
      <div className="contactBg">
        <div className="contactBg2"></div>
      </div>

      <Container maxWidth="lg" className="contact-container">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className="contact-form">
              <Typography variant="h3" component="h3" gutterBottom>
                Contact Us
              </Typography>
              <form>
                <TextField label="Name" variant="outlined" fullWidth margin="normal" required />
                <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" required />
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

export default Contact;
