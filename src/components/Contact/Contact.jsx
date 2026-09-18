import {
  Box,
  Button,
  Container,
  Stack,
  Typography
} from "@mui/material";

import {
  ArrowOutward,
  EmailOutlined,
  LocationOnOutlined
} from "@mui/icons-material";

import profile from "../../data/profile";

import "./contact.css";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <Container
        maxWidth="md"
        sx={{ textAlign: "center" }}
      >

        <Typography className="contact-label">
          07 · LET'S BUILD SOMETHING
        </Typography>

        <Typography className="contact-title">
          Have a problem worth solving?
        </Typography>

        <Typography className="contact-description">
          I'm interested in building scalable
          products, improving engineering systems
          and collaborating on meaningful technical
          challenges.
        </Typography>

        <Button
          className="contact-button"
          endIcon={<ArrowOutward />}
          href={`mailto:${profile.email}`}
        >
          Start a conversation
        </Button>

        <Stack
          direction={{
            xs: "column",
            sm: "row"
          }}
          justifyContent="center"
          spacing={3}
          mt={4}
        >

          <Typography className="contact-info">
            <EmailOutlined />
            {profile.email}
          </Typography>

          <Typography className="contact-info">
            <LocationOnOutlined />
            {profile.location}
          </Typography>

        </Stack>

      </Container>
    </section>
  );
}

export default Contact;