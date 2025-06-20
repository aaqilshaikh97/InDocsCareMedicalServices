import { Grid, Box } from "@mui/material";
import IMCTypography from "../../IMCTypography";
import { fontSizes } from "../../../styles/fontSizes";
import { fontWeights } from "../../../styles/fontWeights";
import { colors } from "../../../styles/colors";
import { spacing } from "../../../styles/spacing";
import { Icons } from "../../../styles/icons";
import IMCBox from "../../IMCBox";
const procedures = [
  "Bone Marrow Transplant",
  "Kidney Transplant",
  "Liver Transplant",
  "Heart Bypass Surgery",
  "Knee Replacement",
  "Hip Replacement Surgery",
  "Spinal Fusion Surgery",
  "IVF Treatment",
  "Brain Tumor Surgery",
  "Prostate Cancer Surgery",
];

const ProceduresSection = () => (
  <Grid size={{ xs: 12, md: 3, sm: 6 }}>
    <IMCTypography
      variant="subtitle"
      size={fontSizes.xl}
      weight={fontWeights.semiBold}
      color={colors.primaryDarkBlue}
      style={{ marginBottom: spacing.sm }}
    >
      Top Procedures
    </IMCTypography>
    <Box mb={4} height="4px" width="100px" bgcolor={colors.primaryDarkBlue} />

    {procedures.map((item, index) => (
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
export default ProceduresSection;
