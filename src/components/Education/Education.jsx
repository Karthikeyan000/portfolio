import {
  Box,
  Container,
  Typography
} from "@mui/material";

import {
  SchoolOutlined
} from "@mui/icons-material";

import "./education.css";

function Education() {
  return (
    <section className="section">

      <Container maxWidth="lg">

        <Box className="section-heading">

          <Typography className="section-number">
            06
          </Typography>

          <Box>
            <Typography component="h2">
              Education
            </Typography>

            <Typography>
              Foundation in computer applications.
            </Typography>
          </Box>

        </Box>

        <Box className="education-card">

          <Box className="education-icon">
            <SchoolOutlined />
          </Box>

          <Box>

            <Typography className="education-degree">
              Bachelor of Computer Application
              (B.C.A)
            </Typography>

            <Typography className="education-school">
              Sri Paramakalyani College ·
              Tamil Nadu, India
            </Typography>

            <Typography className="education-year">
              Graduated · June 2023
            </Typography>

          </Box>

          <Box className="education-score">
            <span>CGPA</span>
            <strong>8.0</strong>
            <small>/10</small>
          </Box>

        </Box>

      </Container>

    </section>
  );
}

export default Education;