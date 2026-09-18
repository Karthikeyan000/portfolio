import {
  Box,
  Chip,
  Container,
  Stack,
  Typography
} from "@mui/material";

import {
  EmojiEventsOutlined
} from "@mui/icons-material";

import "./achievements.css";

function Achievements() {
  const technologies = [
    "React.js",
    "Python Django",
    "DeepSeek",
    "Phidata",
    "Mermaid",
    "Cursor AI"
  ];

  return (
    <section
      id="achievements"
      className="section achievements-section"
    >
      <Container maxWidth="lg">

        <Box className="section-heading">

          <Typography className="section-number">
            04
          </Typography>

          <Box>
            <Typography component="h2">
              Achievements
            </Typography>

            <Typography>
              Recognition and technical milestones.
            </Typography>
          </Box>

        </Box>

        <Box className="achievement-card">

          <Box className="achievement-icon">
            <EmojiEventsOutlined />
          </Box>

          <Typography className="achievement-label">
            1ST PLACE · AI VIBE HACKATHON
          </Typography>

          <Typography className="achievement-title">
            Vistello — Idea to Diagram
          </Typography>

          <Typography className="achievement-description">
            Built an AI application that converts
            natural-language ideas into diagrams and
            architectural visualizations using the
            DeepSeek model.
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
            mt={3}
          >
            {technologies.map((technology) => (
              <Chip
                key={technology}
                label={technology}
                className="skill-chip"
              />
            ))}
          </Stack>

        </Box>

      </Container>
    </section>
  );
}

export default Achievements;