import {
  Box,
  Container,
  Stack,
  Typography
} from "@mui/material";

import {
  ArrowOutward
} from "@mui/icons-material";

import experience from "../../data/experience";

import "./experience.css";

function Experience() {
  return (
    <section
      id="experience"
      className="section"
    >
      <Container maxWidth="lg">

        <Box className="section-heading">

          <Typography className="section-number">
            03
          </Typography>

          <Box>
            <Typography component="h2">
              Experience
            </Typography>

            <Typography>
              Progressive responsibility, from
              intern to SDE 2.
            </Typography>
          </Box>

        </Box>

        <Box className="experience-timeline">

          {experience.map((item) => (
            <Box
              className="experience-item"
              key={item.role}
            >

              <Box className="experience-marker">
                {item.number}
              </Box>

              <Box>

                <Stack
                  direction={{
                    xs: "column",
                    md: "row"
                  }}
                  justifyContent="space-between"
                >

                  <Box>
                    <Typography className="experience-role">
                      {item.role}
                    </Typography>

                    <Typography className="experience-company">
                      {item.company}
                    </Typography>
                  </Box>

                  <Typography className="experience-date">
                    {item.period}
                  </Typography>

                </Stack>

                <Stack
                  spacing={1}
                  mt={2}
                >

                  {item.achievements.map(
                    (achievement) => (
                      <Box
                        key={achievement}
                        className="experience-bullet"
                      >
                        <ArrowOutward />
                        {achievement}
                      </Box>
                    )
                  )}

                </Stack>

              </Box>

            </Box>
          ))}

        </Box>

      </Container>
    </section>
  );
}

export default Experience;