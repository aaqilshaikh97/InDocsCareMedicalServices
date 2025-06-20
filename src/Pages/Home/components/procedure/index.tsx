import { useTranslation } from "react-i18next";
import type { CSSProperties } from "react";
import Grid from "@mui/material/Grid";

import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import { proceduresData } from "./proceduresData";

import { colors } from "../../../../styles/colors";
import { spacing } from "../../../../styles/spacing";
import { borders } from "../../../../styles/borders";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { shadows } from "../../../../styles/shadows";
import { borderRadius } from "../../../../styles/borderRadius";

const Procedures = () => {
  const { t } = useTranslation();

  return (
    <IMCBox backgroundColor={colors.iceBlue} padding={spacing.xl}>
      <IMCBox style={styles.centerBox}>
        <IMCTypography
          variant="h2"
          size={fontSizes.xl}
          weight={fontWeights.semiBold}
          color={colors.primaryDarkBlue}
          style={{ marginBottom: spacing.none }}
        >
          {t("procedures.sectionTitle")}
        </IMCTypography>

        <IMCTypography variant="body" size={fontSizes.md} color={colors.black}>
          {t("procedures.sectionDescription")}
        </IMCTypography>
      </IMCBox>

      <Grid container spacing={2}>
        {proceduresData.map((procedure) => (
          <Grid size={{ xs: 12, md: 4, sm: 4 }} key={procedure.id}>
            <IMCBox
              padding={spacing.sm}
              backgroundColor={colors.white}
              borderRadius={borders.rounded}
              boxShadow={shadows.medium}
              style={styles.cardBox}
            >
              <img
                src={procedure.image}
                alt={t(procedure.translationKey)}
                style={styles.image}
              />
              <IMCTypography
                color={colors.black}
                variant="body"
                style={styles.bodyText}
              >
                {t(procedure.translationKey)}
              </IMCTypography>
            </IMCBox>
          </Grid>
        ))}
      </Grid>
    </IMCBox>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    paddingLeft: "100px",
    paddingRight: "100px",
    paddingBottom: "100px",
  },
  centerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: spacing.lg,
  },
  cardBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxHeight: "350px",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
  },
  bodyText: {
    marginTop: 0,
  },
};

export default Procedures;
