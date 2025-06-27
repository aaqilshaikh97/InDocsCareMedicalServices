import IMCTypography from "../../../../components/IMCTypography";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import Grid from "@mui/material/Grid";
import IMCBox from "../../../../components/IMCBox";
import { spacing } from "../../../../styles/spacing";
import { colors } from "../../../../styles/colors";
import type { CSSProperties } from "react";
import IMSLogo from "../../../../assets/images/logo.png";
import { borderRadius } from "../../../../styles/borderRadius";
import Heart from "../../../../assets/images/heart.jpeg";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Icons } from "../../../../styles/icons";

const procedures = [
  "Coronary Angiogram",
  "PTCA-Percutaneous Transluminal",
  "Coronary Angioplasty",
  "Aortic Stent Grafting",
  "EPS-Electrophysiological",
  "Radiofrequency Ablation",
  "PPI-Permanent Pacemaker Implant – Single Chamber",
  "Biventricular Pacing (CRT)",
  "AICD",
  "PTMC – Percutaneous Transvenous Mitral",
  "Commissurotomy",
  "Off-Pump beating CABG LV restoration",
  "Valve Repair Replacement",
  "Minimally Invasive Hear Valve Surgery (No chest Cut)",
  "Atrial Fibrillation Surgery",
  "Heart Bypass Surgery (CABG)",
  "Minimally Invasive Coronary Artery Bypass Grafting (CABG) (No chest Cut)",
  "Aortic Valve Replacement",
  "Heart Double Valve Replacement",
  "Single Bypass and Valve Replacement",
  "Mitral Valve Replacement",
  "Aortic Dissection Repair Surgery",
  "ASD (Atrial Septal Defect) Closure",
  "VSD Closure (Adult) Surgery",
  "Cardiac Tumour Treatment",
  "PPI-Permanent Pacemaker Implant – Double Chamber",
  "CRT- D Implant (Cardiac Resynchronization Therapy)",
  "Congenital Heart Disorder CHD",
  "Left Ventricular Assist Device (LVAD)",
  "Heart Implants",
];

const HeartTreatment = () => {
  return (
    <>
      <IMCBox
        margin={spacing.none}
        backgroundColor={colors.white}
        padding={spacing.xl}
      >
        <IMCBox
          padding={spacing.none}
          margin={spacing.none}
          style={styles.headerWrapper}
        >
          <IMCTypography
            variant="h2"
            size={fontSizes.xl}
            weight={fontWeights.semiBold}
            color={colors.primaryDarkBlue}
          >
            Heart Treatment & Surgeries{" "}
          </IMCTypography>
        </IMCBox>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, sm: 6 }}>
            <IMCBox
              margin={spacing.none}
              backgroundColor={colors.white}
              padding={spacing.sm}
              style={styles.cardContainer}
            >
              <img src={IMSLogo} alt={IMSLogo} style={styles.logoImage} />
              <IMCTypography
                variant="h3"
                size={fontSizes.xxl}
                weight={fontWeights.semiBold}
                style={styles.lineBreakSpacing}
                color={colors.teal}
              >
                inDocsCare
              </IMCTypography>
              <IMCTypography
                variant="h3"
                size={fontSizes.lg}
                weight={fontWeights.semiBold}
                style={styles.contactText}
              >
                For More Details
              </IMCTypography>
              <IMCTypography
                variant="h3"
                size={fontSizes.lg}
                weight={fontWeights.semiBold}
                style={styles.lineBreakSpacing}
              >
                Queries & Procedures
              </IMCTypography>
              <IMCTypography
                variant="h3"
                size={fontSizes.xl}
                weight={fontWeights.semiBold}
                color={colors.teal}
                style={styles.contactText}
              >
                +91-9211924515
              </IMCTypography>
              <IMCTypography
                variant="h3"
                size={fontSizes.lg}
                weight={fontWeights.semiBold}
                style={styles.contactText}
                color={colors.teal}
              >
                info@indocscare.com
              </IMCTypography>
              <IMCTypography
                variant="h3"
                size={fontSizes.lg}
                weight={fontWeights.semiBold}
                style={styles.contactText}
                color={colors.teal}
              >
                indocscare@gmail.com
              </IMCTypography>
            </IMCBox>
          </Grid>
          <Grid size={{ xs: 12, md: 6, sm: 6 }}>
            <IMCBox
              margin={spacing.none}
              backgroundColor={colors.white}
              padding={spacing.xl}
              style={styles.heartContainer}
            >
              <img src={Heart} alt={Heart} style={styles.heartIMG} />
            </IMCBox>
          </Grid>
        </Grid>
        <IMCBox
          margin={spacing.none}
          backgroundColor={colors.white}
          padding={spacing.xl}
          style={styles.heartContainer}
        >
          <List disablePadding>
            {procedures.map((procedure, index) => (
              <ListItem key={index} disableGutters sx={{ paddingY: 0.5 }}>
                <ListItemIcon style={styles.ArrowIcon}>
                  <Icons.DoubleArrowIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <IMCTypography
                      variant="h3"
                      size={fontSizes.md}
                      weight={fontWeights.bold}
                      style={styles.contactText}
                      color={colors.primaryDarkBlue}
                    >
                      {" "}
                      {procedure}
                    </IMCTypography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </IMCBox>
      </IMCBox>
    </>
  );
};

const styles: Record<string, CSSProperties> = {
  headerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    maxWidth: "250px",
    height: "auto",
    objectFit: "cover",
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: spacing.xxl,
  },
  contactText: {
    marginTop: spacing.none,
    marginBottom: spacing.none,
    paddingTop: spacing.none,
  },
  lineBreakSpacing: {
    marginTop: spacing.none,
  },
  heartIMG: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    objectFit: "cover",
  },
  heartContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    padding: spacing.xxl,
  },
  procedureItem: {
    color: colors.primaryDarkBlue,
    textDecoration: "underline",
    fontWeight: fontWeights.medium,
    cursor: "pointer",
    marginTop: spacing.sm,
    marginBottom: spacing.none,
    padding: spacing.none,
  },
  ArrowIcon: {
    minWidth: "32px",
    color: colors.primaryDarkBlue,
  },
};

export default HeartTreatment;
