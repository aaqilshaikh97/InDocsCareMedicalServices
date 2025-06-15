import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemButton,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadows";
import IMCLogo from "../../assets/images/logo.png";
import IMCTypography from "../IMCTypography";
import { fontWeights } from "../../styles/fontWeights";
import { useTranslation } from "react-i18next";
import { Icons } from "../../styles/icons";

const navLinks = [
  { label: "navbar.home", path: "/" },
  { label: "navbar.transplants", path: "/TransplantsAndReplacements" },
  { label: "navbar.treatments", path: "/TreatmentsAndSurgeries" },
  { label: "navbar.doctors", path: "/Doctors" },
  { label: "navbar.hospitals", path: "/Hospitals" },
  { label: "navbar.blogs", path: "/Blogs" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: colors.teal,
        boxShadow: shadows.heavy,
        top: 0,
        zIndex: 1000,
      }}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          textDecoration: "none",
        }}
      >
        <Box
          component="img"
          src={IMCLogo}
          alt="InDocsCare Logo"
          sx={{ height: 40, width: "auto", cursor: "pointer" }}
        />
        <IMCTypography
          variant="subtitle"
          weight={fontWeights.semiBold}
          color={colors.white}
        >
          InDocsCare Medical Services
        </IMCTypography>
      </Box>

      {!isMobile ? (
        <Box sx={{ display: "flex", gap: 2 }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              component={Link}
              to={link.path}
              variant={location.pathname === link.path ? "contained" : "text"}
              sx={{
                fontWeight: fontWeights.semiBold,
                textTransform: "none",
                color:
                  location.pathname === link.path
                    ? colors.primaryDarkBlue
                    : colors.lightBlue,
                backgroundColor:
                  location.pathname === link.path
                    ? colors.lightGray
                    : "transparent",
                "&:hover": {
                  backgroundColor:
                    location.pathname === link.path
                      ? colors.teal
                      : colors.mintGreen,
                  color: colors.white,
                },
              }}
            >
              {t(link.label)}
            </Button>
          ))}
        </Box>
      ) : (
        <>
          <IconButton onClick={handleDrawerToggle} sx={{ color: colors.white }}>
            <Icons.Menu />
          </IconButton>

          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            <Box
              sx={{
                width: 250,
                padding: 2,
                backgroundColor: colors.white,
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
                <IconButton onClick={handleDrawerToggle}>
                  <Icons.Close />
                </IconButton>
              </Box>
              <List>
                {navLinks.map((link) => (
                  <ListItemButton
                    key={link.path}
                    component={Link}
                    to={link.path}
                    onClick={handleDrawerToggle}
                    selected={location.pathname === link.path}
                  >
                    <ListItemText
                      primary={t(link.label)}
                      primaryTypographyProps={{
                        fontWeight:
                          location.pathname === link.path
                            ? fontWeights.bold
                            : fontWeights.regular,
                        color:
                          location.pathname === link.path
                            ? colors.primaryDarkBlue
                            : colors.teal,
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default Navbar;
