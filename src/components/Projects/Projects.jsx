import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";

import {
  CheckCircleOutline
} from "@mui/icons-material";

import projects from "../../data/projects";

import "./projects.css";

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <Container maxWidth="lg">

        <Box className="section-heading dark">

          <Typography className="section-number">
            02
          </Typography>

          <Box>
            <Typography component="h2">
              Selected Projects
            </Typography>

            <Typography>
              Systems, products and platforms
              I've helped build.
            </Typography>
          </Box>

        </Box>

        <Stack spacing={2}>

          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}

        </Stack>

      </Container>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Box className="project-card">

      <Box className="project-number">
        {String(index + 1).padStart(2, "0")}
      </Box>

      <Box sx={{ flex: 1 }}>

        <Stack
          direction={{
            xs: "column",
            md: "row"
          }}
          justifyContent="space-between"
          gap={1}
        >

          <Box>
            <Typography className="project-name">
              {project.name}
            </Typography>

            <Typography className="project-type">
              {project.type}
            </Typography>
          </Box>

          <Typography className="project-date">
            {project.period}
          </Typography>

        </Stack>

        <Typography className="project-description">
          {project.description}
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          mb={2}
        >
          {project.stack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              className="project-chip"
            />
          ))}
        </Stack>

        <Grid container spacing={1}>

          {project.impact.map((item) => (
            <Grid
              key={item}
              size={{
                xs: 12,
                md: 4
              }}
            >
              <Box className="project-impact">
                <CheckCircleOutline />
                {item}
              </Box>
            </Grid>
          ))}

        </Grid>

      </Box>

    </Box>
  );
}

export default Projects;