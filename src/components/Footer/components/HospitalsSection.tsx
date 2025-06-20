import React from "react";
import { Grid, Box } from "@mui/material";
import IMCTypography from "../../IMCTypography";
import { fontSizes } from "../../../styles/fontSizes";
import { fontWeights } from "../../../styles/fontWeights";
import { colors } from "../../../styles/colors";
import { spacing } from "../../../styles/spacing";
import IMCBox from "../../IMCBox";
import { Icons } from "../../../styles/icons";

const hospitals = [
  "Indraprastha Apollo Hospital",
  "Medanta – The Medicity Hospital",
  "Fortis Memorial Research Institute",
  "BLK Max Super Speciality Hospital",
  "Max Super Speciality Hospital, Saket",
  "Apollo Hospitals, Greams Road",
  "Artemis Hospital",
  "Amrita Hospital, Faridabad",
  "KIMS Hospital, Secunderabad",
  "Aster Medcity, Kochi",
];

const HospitalsSection = () => (
  <Grid size={{ xs: 12, md: 3, sm: 6 }}>
    <IMCTypography
      variant="subtitle"
      size={fontSizes.xl}
      weight={fontWeights.semiBold}
      color={colors.primaryDarkBlue}
      style={{ marginBottom: spacing.sm }}
    >
      Top Hospitals
    </IMCTypography>
    <Box mb={4} height="4px" width="100px" bgcolor={colors.primaryDarkBlue} />

    {hospitals.map((item, index) => (
      <IMCBox
        key={index}
        margin="0"
        padding="0"
        backgroundColor={colors.transparent}
        style={styles.iconTextRow("center", spacing.none, spacing.xs)}
      >
        <Icons.KeyboardDoubleArrowRightIcon
          sx={{ color: colors.primaryDarkBlue, fontSize: fontSizes.xl }}
        />
        <IMCTypography
          variant="body"
          color={colors.primaryDarkBlue}
          size={fontSizes.md}
          style={{ margin: 0 }}
        >
          {item}
        </IMCTypography>
      </IMCBox>
    ))}
  </Grid>
);

const styles = {
  iconTextRow: (align = "center", marginTop = "0", marginBottom = "0") => ({
    display: "flex",
    alignItems: align,
    gap: spacing.sm,
    marginTop,
    marginBottom,
  }),
};
export default HospitalsSection;
