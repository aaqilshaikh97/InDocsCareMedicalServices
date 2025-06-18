import { useTranslation } from "react-i18next";
import { colors } from "../../../../styles/colors";
import IMCBox from "../../../../components/IMCBox";
import { spacing } from "../../../../styles/spacing";
import IMCTypography from "../../../../components/IMCTypography";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import type { CSSProperties } from "react";
import Doctors from "../../../../assets/images/hospitals&docts/18.jpg";
import { borderRadius } from "../../../../styles/borderRadius";
import { Icons } from "../../../../styles/icons";
import { Trans } from "react-i18next";

const HospitalsAndDoctors = () => {
  const { t } = useTranslation();

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
          {t("hospitals&DRs.sectionTitle")}
        </IMCTypography>
      </IMCBox>

      <IMCBox>
        <img src={Doctors} alt="Doctors" style={styles.careIMG} />

        <IMCTypography
          variant="subtitle"
          size={fontSizes.lg}
          weight={fontWeights.semiBold}
          color={colors.primaryDarkBlue}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Icons.PublicIcon fontSize="small" sx={{ color: colors.msBlue }} />
          {t("hospitals&DRs.introHeadline")}
        </IMCTypography>

        <IMCTypography variant="subtitle">
          {t("hospitals&DRs.introDescription")}
        </IMCTypography>

        <ul style={{ paddingLeft: "1.5rem", marginTop: 0 }}>
          <li>
            <IMCTypography
              variant="body"
              style={{ marginBottom: spacing.none }}
            >
              {t("hospitals&DRs.highlightPoint1")}
            </IMCTypography>
          </li>
          <li>
            <IMCTypography variant="body" style={{ marginTop: spacing.none }}>
              {t("hospitals&DRs.highlightPoint2")}
            </IMCTypography>
          </li>
        </ul>

        <IMCTypography
          variant="subtitle"
          size={fontSizes.lg}
          weight={fontWeights.semiBold}
          color={colors.primaryDarkBlue}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: spacing.none,
          }}
        >
          <Icons.LightbulbIcon
            fontSize="small"
            sx={{ color: colors.warning }}
          />
          {t("hospitals&DRs.ctaHeadline")}
        </IMCTypography>

        <IMCTypography
          variant="body"
          style={{ marginBottom: spacing.none, marginTop: spacing.none }}
        >
          {t("hospitals&DRs.ctaDescription")}
        </IMCTypography>

        <IMCTypography variant="body" style={{ marginTop: spacing.sm }}>
          {t("hospitals&DRs.benefitList")
            .split("\n")
            .map((line, index) => (
              <span key={index}>
                ✅ {line.trim()}
                <br />
              </span>
            ))}
        </IMCTypography>

        <IMCTypography
          variant="subtitle"
          size={fontSizes.lg}
          weight={fontWeights.semiBold}
          color={colors.primaryDarkBlue}
          style={{ marginBottom: spacing.none }}
        >
          {t("hospitals&DRs.contactHeading")}
        </IMCTypography>

        <IMCTypography variant="body" style={{ marginTop: spacing.none }}>
          <Trans
            i18nKey="hospitals&DRs.contactPhone"
            components={{ strong: <strong /> }}
          />
          <br />
          <strong>{t("hospitals&DRs.contactEmail")}</strong>
        </IMCTypography>
      </IMCBox>
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
  careIMG: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
  },
};

export default HospitalsAndDoctors;
