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
import { ourServicesData } from "./ourServicesData";

const OurServices = () => {
  const { t } = useTranslation();

  const serviceList = ourServicesData.map((service) => ({
    id: service.id,
    icon: <service.icon style={styles.servicesIcons} />,
    title: service.titleKey,
    body: service.bodyKey,
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
          {t("ourServices.ourServices")}
        </IMCTypography>
      </IMCBox>

      <Grid container spacing={2}>
        {serviceList.map((service) => (
          <Grid size={{ xs: 12, md: 3, sm: 3 }} key={service.id}>
            <IMCBox
              padding={spacing.sm}
              backgroundColor={colors.white}
              borderRadius={borders.rounded}
              boxShadow={shadows.medium}
              style={styles.cardBox}
            >
              {service.icon}
              <IMCTypography
                variant="subtitle"
                weight={fontWeights.semiBold}
                color={colors.black}
                style={styles.titleText}
              >
                {t(service.title)}
              </IMCTypography>
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
  },
  titleText: {
    marginBottom: 0,
  },
  bodyText: {
    marginTop: 0,
  },
  servicesIcons: {
    fontSize: 80,
    color: colors.teal,
  },
};

export default OurServices;
