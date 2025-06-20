import { useTranslation } from "react-i18next";
import { colors } from "../../../../styles/colors";
import IMCBox from "../../../../components/IMCBox";
import { spacing } from "../../../../styles/spacing";
import IMCTypography from "../../../../components/IMCTypography";
import Grid from "@mui/material/Grid";
import { borders } from "../../../../styles/borders";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { shadows } from "../../../../styles/shadows";
import type { CSSProperties } from "react";
import { borderRadius } from "../../../../styles/borderRadius";
import { hospitalData } from "./hospitalData";

const Hospitals = () => {
  const { t } = useTranslation();
  const HospitalList = hospitalData.map((service) => ({
    id: service.id,
    images: (
      <img
        src={service.image}
        alt={`hospital-${service.id}`}
        style={styles.hospitalsIMG}
      />
    ),
    body: t(service.translation),
  }));

  return (
    <IMCBox
      margin={spacing.none}
      backgroundColor={colors.background}
        padding={spacing.xl}
    >
      <IMCBox
        padding={spacing.none}
        margin={spacing.none}
        style={styles.centerBox}
      >
        <IMCTypography
          variant="h2"
          size={fontSizes.xl}
          weight={fontWeights.semiBold}
          color={colors.primaryDarkBlue}
        >
          {t("hospitals.sectionTitle")}
        </IMCTypography>
      </IMCBox>

      <Grid container spacing={2}>
        {HospitalList.map((service) => (
          <Grid size={{ xs: 12, md: 4, sm: 4 }} key={service.id}>
            <IMCBox
              padding={spacing.sm}
              backgroundColor={colors.white}
              borderRadius={borders.rounded}
              boxShadow={shadows.medium}
              style={styles.cardBox}
            >
              {service.images}
              <IMCTypography
                color={colors.black}
                variant="body"
                style={styles.bodyText}
              >
                {t(service.body)}
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
  },
  cardBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxHeight: "350px",
  },
  titleText: {
    marginBottom: 0,
  },
  bodyText: {
    marginTop: 0,
  },
  hospitalsIMG: {
    width: "100%",
    minHeight: "300px",
    maxHeight: "300px",
    objectFit: "cover",
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
  },
};

export default Hospitals;
