import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography
} from "@mui/material";

import {
  ArrowOutward,
  Download,
  EmailOutlined,
  GitHub,
  LinkedIn,
  NorthEast
} from "@mui/icons-material";

import profile from "../../data/profile";

import "./hero.css";

function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  };

  return (
    <section
      id="about"
      className="hero-section"
    >
      <Container maxWidth="lg">

        <Grid
          container
          spacing={6}
          alignItems="center"
        >

          <Grid size={{ xs: 12, md: 7 }}>

            <div className="hero-status">
              <span className="status-dot" />
              AVAILABLE FOR NEW CHALLENGES
            </div>

            <Typography className="hero-intro">
              HELLO, I'M
            </Typography>

            <Typography
              component="h1"
              className="hero-name"
            >
              Karthikeyan<span>.</span>
            </Typography>

            <Typography className="hero-position">
              {profile.role}
              <b> · </b>
              {profile.headline}
            </Typography>

            <Typography className="hero-tagline">
              {profile.tagline}
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row"
              }}
              spacing={1.5}
              mt={4}
            >

              <Button
                className="primary-button"
                endIcon={<NorthEast />}
                onClick={scrollToProjects}
              >
                View my work
              </Button>

              <Button
                className="secondary-button"
                startIcon={<Download />}
                href="/resume/Karthikeyan-M-Resume.pdf"
              >
                Download Resume
              </Button>

            </Stack>

            <Stack
              direction="row"
              spacing={1}
              mt={3}
            >

              <Tooltip title="GitHub">
                <IconButton
                  component="a"
                  href={profile.github}
                  target="_blank"
                >
                  <GitHub />
                </IconButton>
              </Tooltip>

              <Tooltip title="LinkedIn">
                <IconButton
                  component="a"
                  href={profile.linkedin}
                  target="_blank"
                >
                  <LinkedIn />
                </IconButton>
              </Tooltip>

              <Tooltip title="Email">
                <IconButton
                  component="a"
                  href={`mailto:${profile.email}`}
                >
                  <EmailOutlined />
                </IconButton>
              </Tooltip>

            </Stack>

          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <DeveloperCodeCard />
          </Grid>

        </Grid>

      </Container>
    </section>
  );
}

function DeveloperCodeCard() {
  return (
    <Box className="code-window">

      <Box className="code-header">
        <Box className="window-controls">
          <span />
          <span />
          <span />
        </Box>

        <Typography>
          developer.ts
        </Typography>
      </Box>

      <Box className="code-content">

        <div>
          <i>const</i> developer = {"{"}
        </div>

        <div className="code-indent">
          <em>name:</em>{" "}
          <strong>"Karthikeyan"</strong>,
        </div>

        <div className="code-indent">
          <em>role:</em>{" "}
          <strong>"SDE 2"</strong>,
        </div>

        <div className="code-indent">
          <em>focus:</em>{" "}
          <strong>"Full Stack"</strong>,
        </div>

        <div className="code-indent">
          <em>experience:</em>{" "}
          <strong>"3+ years"</strong>,
        </div>

        <div className="code-indent">
          <em>stack:</em> [
        </div>

        <div className="code-indent-2">
          <strong>"Node.js"</strong>,
          <strong>"React.js"</strong>,
        </div>

        <div className="code-indent-2">
          <strong>"PostgreSQL"</strong>,
          <strong>"AWS"</strong>
        </div>

        <div className="code-indent">
          ]
        </div>

        <div className="code-indent">
          <em>mindset:</em>{" "}
          <strong>
            "Build. Optimize. Lead."
          </strong>
        </div>

        <div>{"};"}</div>

        <div className="code-cursor">
          _
        </div>

      </Box>

    </Box>
  );
}

export default Hero;