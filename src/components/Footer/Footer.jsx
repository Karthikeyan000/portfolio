import {
  Box,
  Container,
  Link,
  Stack,
  Typography
} from "@mui/material";

import profile from "../../data/profile";

import "./footer.css";

function Footer() {
  return (
    <Box className="footer">

      <Container maxWidth="lg">

        <Stack
          direction={{
            xs: "column",
            sm: "row"
          }}
          justifyContent="space-between"
          gap={2}
        >

          <Typography>
            © {new Date().getFullYear()}
            {" "}
            Karthikeyan M.
            {" "}
            Built with React + MUI.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
          >

            <Link
              href={profile.github}
              target="_blank"
            >
              GitHub
            </Link>

            <Link
              href={profile.linkedin}
              target="_blank"
            >
              LinkedIn
            </Link>

            <Link
              href={`mailto:${profile.email}`}
            >
              Email
            </Link>

          </Stack>

        </Stack>

      </Container>

    </Box>
  );
}

export default Footer;