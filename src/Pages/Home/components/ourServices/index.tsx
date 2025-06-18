import { useTranslation } from "react-i18next";
import { colors } from "../../../../styles/colors";
import IMCBox from "../../../../components/IMCBox";
import { spacing } from "../../../../styles/spacing";
import { Icons } from "../../../../styles/icons";
import IMCTypography from "../../../../components/IMCTypography";
import Grid from "@mui/material/Grid";
import { borders } from "../../../../styles/borders";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { shadows } from "../../../../styles/shadows";
import type { CSSProperties } from "react";

const OurServices = () => {
  const { t } = useTranslation();
  const dummyServices = [
    {
      id: 1,
      icon: <Icons.MedicalServices style={styles.servicesIcons} />,
      title: t("ourServices.Medical Opinion and Cost Estimates"),
      body: t("ourServices.Expert medical opinions and cost estimates"),
    },
    {
      id: 2,
      icon: <Icons.LaptopIcon style={styles.servicesIcons} />,
      title: t("ourServices.Online Consultation"),
      body: t("ourServices.Speak to a doctor online from anywhere"),
    },
    {
      id: 3,
      icon: <Icons.EditDocumentIcon style={styles.servicesIcons} />,
      title: t("ourServices.Visa Assistance"),
      body: t("ourServices.Help with medical visa arrangements"),
    },
    {
      id: 4,
      icon: <Icons.CurrencyExchangeIcon style={styles.servicesIcons} />,
      title: t("ourServices.Money Exchange"),
      body: t("ourServices.Convenient currency exchange services"),
    },
    {
      id: 5,
      icon: <Icons.TranslateIcon style={styles.servicesIcons} />,
      title: t("ourServices.Interpreters and Translators"),
      body: t("ourServices.Breaking language barriers for you"),
    },
    {
      id: 6,
      icon: <Icons.DirectionsTransitIcon style={styles.servicesIcons} />,
      title: t("ourServices.Transportation Assistance"),
      body: t("ourServices.Airport pickup and local transportation"),
    },
    {
      id: 7,
      icon: <Icons.ApartmentIcon style={styles.servicesIcons} />,
      title: t("ourServices.Accommodation"),
      body: t("ourServices.Near the hospital and within your budget"),
    },
    {
      id: 8,
      icon: <Icons.EditCalendarIcon style={styles.servicesIcons} />,
      title: t("ourServices.Appointment Scheduling"),
      body: t("ourServices.We coordinate your doctor appointments"),
    },
    {
      id: 9,
      icon: <Icons.Person2Icon style={styles.servicesIcons} />,
      title: t("ourServices.Private Nursing"),
      body: t("ourServices.Access to private duty nursing care"),
    },
    {
      id: 10,
      icon: <Icons.RecordVoiceOverIcon style={styles.servicesIcons} />,
      title: t("ourServices.Pre-Travel Consultation"),
      body: t("ourServices.Understand your procedure before your trip"),
    },
    {
      id: 11,
      icon: <Icons.NoteAltIcon style={styles.servicesIcons} />,
      title: t("ourServices.Admission Support"),
      body: t("ourServices.Help with hospital admission process"),
    },
    {
      id: 12,
      icon: <Icons.VaccinesIcon style={styles.servicesIcons} />,
      title: t("ourServices.Pharmacy Support"),
      body: t("ourServices.Support with medications and pharmacy"),
    },
  ];
  return (
    <IMCBox
      margin={spacing.none}
      backgroundColor={colors.white}
      style={styles.container}
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
        {dummyServices.map((service) => (
          <Grid size={{ xs: 12, md: 4, sm: 4 }} key={service.id}>
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
