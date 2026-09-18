import { useState } from "react";
import portfolioIcon from "../../../Asset/images/portfolio_icon.png";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar
} from "@mui/material";

import {
  Menu,
  Close
} from "@mui/icons-material";

import "./navbar.css";

const navigation = [
  "About",
  "Stack",
  "Projects",
  "Experience",
  "Achievements",
  "Contact"
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (section) => {
    document
      .getElementById(section.toLowerCase())
      ?.scrollIntoView({
        behavior: "smooth"
      });

    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className="navbar"
      >
        <Container maxWidth="lg">
          <Toolbar className="navbar-toolbar">

            <Box
              className="brand"
              onClick={() => scrollToSection("About")}
            >
              <Box className="brand-logo">
              <img
                src={portfolioIcon}
                alt="Karthikeyan Portfolio"
              />
              </Box>

              <Box>
                <div className="brand-name">
                  KARTHIKEYAN
                </div>

                <div className="brand-role">
                  SOFTWARE ENGINEER
                </div>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }} />

            <Stack
              direction="row"
              spacing={1}
              className="desktop-navigation"
            >
              {navigation.map((item) => (
                <Button
                  key={item}
                  onClick={() =>
                    scrollToSection(item)
                  }
                >
                  {item}
                </Button>
              ))}
            </Stack>

            <IconButton
              className="mobile-navigation"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </IconButton>

          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box className="mobile-drawer">

          <Box className="drawer-close">
            <IconButton
              onClick={() => setOpen(false)}
            >
              <Close />
            </IconButton>
          </Box>

          <List>
            {navigation.map((item) => (
              <ListItemButton
                key={item}
                onClick={() =>
                  scrollToSection(item)
                }
              >
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>

        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;