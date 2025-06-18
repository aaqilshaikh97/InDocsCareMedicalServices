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

import cardiology from "../../../../assets/images/Care/2.jpg";
import orthopedics from "../../../../assets/images/Care/3.jpg";
import neurosurgery from "../../../../assets/images/Care/4.jpg";
import spine from "../../../../assets/images/Care/5.jpg";
import nephrology from "../../../../assets/images/Care/6.jpg";
import hepatology from "../../../../assets/images/Care/7.jpg";
import pulmonology from "../../../../assets/images/Care/8.jpg";
import heartTransplant from "../../../../assets/images/Care/9.jpg";
import urology from "../../../../assets/images/Care/10.jpg";
import gastroenterology from "../../../../assets/images/Care/11.jpg";
import generalSurgery from "../../../../assets/images/Care/12.jpg";
import womenHealth from "../../../../assets/images/Care/13.jpg";
import oncology from "../../../../assets/images/Care/14.jpg";
import boneMarrow from "../../../../assets/images/Care/15.jpg";
import fertility from "../../../../assets/images/Care/16.jpg";
import ent from "../../../../assets/images/Care/17.jpg";

const Care = () => {
  const { t } = useTranslation();
  const dummyServices = [
    {
      id: 1,
      images: <img src={cardiology} alt="cardiology" style={styles.careIMG} />,
      body: t("Care.cardiology"),
    },
    {
      id: 2,
      images: (
        <img src={orthopedics} alt="orthopedics" style={styles.careIMG} />
      ),
      body: t("Care.orthopedics"),
    },
    {
      id: 3,
      images: (
        <img src={neurosurgery} alt="neurosurgery" style={styles.careIMG} />
      ),
      body: t("Care.neurosurgery"),
    },
    {
      id: 4,
      images: <img src={spine} alt="spine" style={styles.careIMG} />,
      body: t("Care.spine"),
    },
    {
      id: 5,
      images: <img src={nephrology} alt="nephrology" style={styles.careIMG} />,
      body: t("Care.nephrology"),
    },
    {
      id: 6,
      images: <img src={hepatology} alt="hepatology" style={styles.careIMG} />,
      body: t("Care.hepatology"),
    },
    {
      id: 7,
      images: (
        <img src={pulmonology} alt="pulmonology" style={styles.careIMG} />
      ),
      body: t("Care.pulmonology"),
    },
    {
      id: 8,
      images: (
        <img
          src={heartTransplant}
          alt="heartTransplant"
          style={styles.careIMG}
        />
      ),
      body: t("Care.heartTransplant"),
    },
    {
      id: 9,
      images: <img src={urology} alt="urology" style={styles.careIMG} />,
      body: t("Care.urology"),
    },
    {
      id: 10,
      images: (
        <img
          src={gastroenterology}
          alt="gastroenterology"
          style={styles.careIMG}
        />
      ),
      body: t("Care.gastroenterology"),
    },
    {
      id: 11,
      images: (
        <img src={generalSurgery} alt="generalSurgery" style={styles.careIMG} />
      ),
      body: t("Care.generalSurgery"),
    },
    {
      id: 12,
      images: (
        <img src={womenHealth} alt="womenHealth" style={styles.careIMG} />
      ),
      body: t("Care.womenHealth"),
    },
    {
      id: 13,
      images: <img src={oncology} alt="oncology" style={styles.careIMG} />,
      body: t("Care.oncology"),
    },
    {
      id: 14,
      images: <img src={boneMarrow} alt="boneMarrow" style={styles.careIMG} />,
      body: t("Care.boneMarrow"),
    },
    {
      id: 15,
      images: <img src={fertility} alt="fertility" style={styles.careIMG} />,
      body: t("Care.fertility"),
    },
    {
      id: 16,
      images: <img src={ent} alt="ent" style={styles.careIMG} />,
      body: t("Care.ent"),
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
          {/* {t("ourServices.ourServices")} */}
          Complete Care, Every Specialty
        </IMCTypography>
      </IMCBox>

      <Grid container spacing={2}>
        {dummyServices.map((service) => (
          <Grid size={{ xs: 12, md: 3, sm: 3 }} key={service.id}>
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
    minHeight: "150px",
  },
  titleText: {
    marginBottom: 0,
  },
  bodyText: {
    marginTop: 0,
  },
  careIMG: {
    width: "100%",
    height: "90%",
    maxHeight: 300,
    objectFit: "cover",
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
  },
};

export default Care;
