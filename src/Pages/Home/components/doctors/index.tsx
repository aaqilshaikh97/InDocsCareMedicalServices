import { useTranslation } from "react-i18next";
import { colors } from "../../../../styles/colors";
import IMCBox from "../../../../components/IMCBox";
import { spacing } from "../../../../styles/spacing";
import IMCTypography from "../../../../components/IMCTypography";
import { borders } from "../../../../styles/borders";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { shadows } from "../../../../styles/shadows";
import type { CSSProperties } from "react";
import { borderRadius } from "../../../../styles/borderRadius";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { doctorsList } from "./doctorsList";
import "../../../../styles/swiper.css";

const Doctors = () => {
  const { t } = useTranslation();

  return (
    <IMCBox
      margin={spacing.none}
      padding={spacing.lg}
      backgroundColor={colors.background}
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
          style={styles.trustedExpertsTitle}
        >
          {t("doctorSection.trustedExperts")}
        </IMCTypography>
        <IMCTypography variant="body" size={fontSizes.md} color={colors.black}>
          {t("doctorSection.fewFromNetwork")}
        </IMCTypography>
      </IMCBox>
      <IMCBox style={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={20}
          style={{ width: "100%" }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {doctorsList.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <IMCBox
                padding={spacing.sm}
                backgroundColor={colors.white}
                borderRadius={borders.rounded}
                boxShadow={shadows.medium}
                style={{
                  ...styles.cardBox,
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  style={styles.hospitalsIMG}
                />
                <IMCTypography
                  color={colors.black}
                  variant="body"
                  style={styles.bodyText}
                >
                  {t(doctor.name)}
                </IMCTypography>
              </IMCBox>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="custom-prev"
          style={{ ...styles.arrowButton, ...styles.arrowPrev }}
        >
          ‹
        </div>
        <div
          className="custom-next"
          style={{ ...styles.arrowButton, ...styles.arrowNext }}
        >
          ›
        </div>
      </IMCBox>
    </IMCBox>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    paddingBottom: spacing.md,
  },
  centerBox: {
    display: "flex",
    flexDirection: "column",
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
    height: "300px",
    objectFit: "cover",
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
    display: "block",
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 20,
    backgroundColor: colors.primaryDarkBlue,
    color: colors.white,
    width: "40px",
    height: "40px",
    borderRadius: borderRadius.full,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: fontSizes.xxl,
    boxShadow: shadows.heavy,
    cursor: "pointer",
    userSelect: "none",
  },
  trustedExpertsTitle: {
    marginBottom: spacing.none,
  },
  swiperWrapper: {
    position: "relative",
  },
  arrowPrev: {
    left: "10px",
  },
  arrowNext: {
    right: "10px",
  },
};

export default Doctors;
