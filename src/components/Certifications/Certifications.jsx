import {
  Box,
  Container,
  Stack,
  Typography
} from "@mui/material";

import certifications from "../../data/certifications";

import "./certifications.css";

function Certifications() {
  return (
    <section className="section">

      <Container maxWidth="lg">

        <Box className="section-heading">

          <Typography className="section-number">
            05
          </Typography>

          <Box>
            <Typography component="h2">
              Certifications
            </Typography>

            <Typography>
              Continuous learning and technical
              development.
            </Typography>
          </Box>

        </Box>

        <Box className="certifications-card">

          <Stack>

            {certifications.map((certificate) => (
              <Box
                key={certificate.name}
                className="certificate-row"
              >

                <Box>

                  <Typography className="certificate-name">
                    {certificate.name}
                  </Typography>

                  <Typography className="certificate-org">
                    {certificate.organization}
                  </Typography>

                </Box>

                <Typography className="certificate-date">
                  {certificate.date}
                </Typography>

              </Box>
            ))}

          </Stack>

        </Box>

      </Container>

    </section>
  );
}

export default Certifications;