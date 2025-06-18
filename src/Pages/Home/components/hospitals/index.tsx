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

import cardiology from "../../../../assets/images/hospitals/19.jpg";
import orthopedics from "../../../../assets/images/hospitals/20.jpg";
import neurosurgery from "../../../../assets/images/hospitals/21.jpg";
import spine from "../../../../assets/images/hospitals/22.jpg";
import nephrology from "../../../../assets/images/hospitals/23.jpg";
import hepatology from "../../../../assets/images/hospitals/24.jpg";
import pulmonology from "../../../../assets/images/hospitals/25.jpg";
import heartTransplant from "../../../../assets/images/hospitals/26.jpg";
import urology from "../../../../assets/images/hospitals/27.jpg";
import gastroenterology from "../../../../assets/images/hospitals/28.jpg";
import generalSurgery from "../../../../assets/images/hospitals/29.jpg";
import womenHealth from "../../../../assets/images/hospitals/30.jpg";

const Hospitals = () => {
  const { t } = useTranslation();
  const dummyServices = [
    {
      id: 1,
      images: (
        <img src={cardiology} alt="cardiology" style={styles.hospitalsIMG} />
      ),
      body: t("hospitals.fortisMemorial"),
    },
    {
      id: 2,
      images: (
        <img src={orthopedics} alt="orthopedics" style={styles.hospitalsIMG} />
      ),
      body: t("hospitals.maxSuperSpeciality"),
    },
    {
      id: 3,
      images: (
        <img
          src={neurosurgery}
          alt="neurosurgery"
          style={styles.hospitalsIMG}
        />
      ),
      body: t("hospitals.blkMax"),
    },
    {
      id: 4,
      images: <img src={spine} alt="spine" style={styles.hospitalsIMG} />,
      body: t("hospitals.jaypee"),
    },
    {
      id: 5,
      images: (
        <img src={nephrology} alt="nephrology" style={styles.hospitalsIMG} />
      ),
      body: t("hospitals.fortisEscorts"),
    },
    {
      id: 6,
      images: (
        <img src={hepatology} alt="hepatology" style={styles.hospitalsIMG} />
      ),
      body: t("hospitals.medenat"),
    },
    {
      id: 7,
      images: (
        <img src={pulmonology} alt="pulmonology" style={styles.hospitalsIMG} />
      ),
      body: t("hospitals.apollo"),
    },
    {
      id: 8,
      images: (
        <img
          src={heartTransplant}
          alt="heartTransplant"
          style={styles.hospitalsIMG}
        />
      ),
      body: t("hospitals.artemis"),
    },
    {
      id: 9,
      images: <img src={urology} alt="urology" style={styles.hospitalsIMG} />,
      body: t("hospitals.amrita"),
    },
    {
      id: 10,
      images: (
        <img
          src={gastroenterology}
          alt="gastroenterology"
          style={styles.hospitalsIMG}
        />
      ),
      body: t("hospitals.manipal"),
    },
    {
      id: 11,
      images: (
        <img
          src={generalSurgery}
          alt="generalSurgery"
          style={styles.hospitalsIMG}
        />
      ),
      body: t("hospitals.ssbHeart"),
    },
    {
      id: 12,
      images: (
        <img src={womenHealth} alt="womenHealth" style={styles.hospitalsIMG} />
      ),
      body: t("hospitals.maxPPG"),
    },
  ];
  return (
    <IMCBox
      margin={spacing.none}
      backgroundColor={colors.iceBlue}
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
          {t("hospitals.sectionTitle")}
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
              {service.images}
              {/* <IMCTypography
                variant="subtitle"
                weight={fontWeights.semiBold}
                color={colors.black}
                style={styles.titleText}
              >
                {t(service.title)}
              </IMCTypography> */}
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
    // minHeight: "250px",
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
