import React from "react";
import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { colors } from "../../constants/colors";
import { shadows } from "../../constants/shadows";
import IMCLogo from "../../assets/images/logo.png";
import IMCTypography from "../IMCTypography";
import { fontWeights } from "../../constants/fontWeights";
import { useTranslation } from "react-i18next";

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
    </Box>
  );
};

export default Navbar;
