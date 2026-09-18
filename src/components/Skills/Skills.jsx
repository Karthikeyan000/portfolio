import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";

import {
  Terminal
} from "@mui/icons-material";

import skills from "../../data/skills";

import "./skills.css";

function Skills() {
  return (
    <section
      id="stack"
      className="section"
    >
      <Container maxWidth="lg">

        <SectionHeading />

        <Grid container spacing={2}>

          {Object.entries(skills).map(
            ([category, items]) => (
              <Grid
                key={category}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4
                }}
              >

                <Box className="skill-card">

                  <Box className="skill-title">

                    <Terminal />

                    <Typography>
                      {category}
                    </Typography>

                  </Box>

                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1}
                  >

                    {items.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        className="skill-chip"
                      />
                    ))}

                  </Stack>

                </Box>

              </Grid>
            )
          )}

        </Grid>

      </Container>
    </section>
  );
}

function SectionHeading() {
  return (
    <Box className="section-heading">

      <Typography className="section-number">
        01
      </Typography>

      <Box>
        <Typography component="h2">
          Technical Stack
        </Typography>

        <Typography>
          Tools I use to turn ideas into
          production systems.
        </Typography>
      </Box>

    </Box>
  );
}

export default Skills;