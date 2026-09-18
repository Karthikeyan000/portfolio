import {
  Box,
  Container,
  Grid,
  Typography
} from "@mui/material";

import {
  Code,
  EmojiEventsOutlined,
  NorthEast,
  WorkOutline
} from "@mui/icons-material";

import "./stats.css";

const stats = [
  {
    number: "3+",
    label: "Years Experience",
    icon: <WorkOutline />
  },
  {
    number: "5+",
    label: "Web Applications",
    icon: <Code />
  },
  {
    number: "5",
    label: "Certifications",
    icon: <NorthEast />
  },
  {
    number: "#1",
    label: "AI Hackathon 2025",
    icon: <EmojiEventsOutlined />
  }
];

function Stats() {
  return (
    <section className="stats-section">

      <Container maxWidth="lg">

        <Grid container>

          {stats.map((stat) => (
            <Grid
              key={stat.label}
              size={{
                xs: 6,
                md: 3
              }}
            >

              <Box className="stat-item">

                <Box className="stat-icon">
                  {stat.icon}
                </Box>

                <Typography className="stat-number">
                  {stat.number}
                </Typography>

                <Typography className="stat-label">
                  {stat.label}
                </Typography>

              </Box>

            </Grid>
          ))}

        </Grid>

      </Container>

    </section>
  );
}

export default Stats;