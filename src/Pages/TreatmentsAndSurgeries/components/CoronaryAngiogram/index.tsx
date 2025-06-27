import type { CSSProperties } from "react";
import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import { colors } from "../../../../styles/colors";
import { spacing } from "../../../../styles/spacing";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { Icons } from "../../../../styles/icons";
import { useTranslation, Trans } from "react-i18next";

const CoronaryAngiogram = () => {
  const { t } = useTranslation();

  return (
    <IMCBox
      padding={spacing.xl}
      margin={spacing.none}
      backgroundColor={colors.iceBlue}
    >
      {/* Title */}
      <IMCBox style={styles.centeredColumn}>
        <IMCTypography
          variant="h2"
          size={fontSizes.xl}
          weight={fontWeights.semiBold}
          color={colors.primaryDarkBlue}
        >
          {t("coronaryAngiogram.title")}
        </IMCTypography>
      </IMCBox>

      {/* Subheading */}
      <IMCBox style={styles.leftAlignedColumn}>
        <IMCTypography
          variant="subtitle"
          size={fontSizes.lg}
          weight={fontWeights.semiBold}
          color={colors.msBlue}
          style={styles.subheading}
        >
          {t("coronaryAngiogram.subheading")}
        </IMCTypography>
      </IMCBox>

      {/* What is a Coronary Angiogram */}
      <>
        <IMCTypography
          variant="subtitle"
          size={fontSizes.lg}
          weight={fontWeights.semiBold}
          color={colors.primaryDarkBlue}
          style={styles.sectionTitle}
        >
          {t("coronaryAngiogram.whatIs.title")}
        </IMCTypography>

        <IMCTypography variant="body">
          <Trans
            i18nKey="coronaryAngiogram.whatIs.content1"
            components={{ bold: <strong /> }}
          />
        </IMCTypography>

        <IMCTypography variant="body">
          <Trans
            i18nKey="coronaryAngiogram.whatIs.content2"
            components={{ bold: <strong /> }}
          />
        </IMCTypography>
      </>
      {/* Why is it performed */}
      <>
        <IMCTypography
          variant="h3"
          weight={fontWeights.semiBold}
          style={styles.sectionTitle}
        >
          {t("coronaryAngiogram.why.title")}
        </IMCTypography>

        <IMCTypography variant="body">
          {t("coronaryAngiogram.why.content")}
        </IMCTypography>

        {["diagnosing", "assessing", "guiding", "preventing"].map((key) => (
          <IMCBox key={key} style={styles.bulletRow}>
            <Icons.CheckCircleIcon sx={styles.bulletIcon} />
            <IMCTypography
              size={fontSizes.md}
              variant="body"
              style={styles.bulletText}
            >
              <Trans
                i18nKey={`coronaryAngiogram.why.${key}`}
                components={{ bold: <strong /> }}
              />
            </IMCTypography>
          </IMCBox>
        ))}
      </>

      {/* preparation */}
      <>
        <IMCTypography
          variant="h3"
          weight={fontWeights.semiBold}
          style={styles.sectionTitle}
        >
          {t("coronaryAngiogram.preparation.title")}
        </IMCTypography>

        <IMCTypography variant="body">
          {t("coronaryAngiogram.preparation.content")}
        </IMCTypography>

        {[
          "medicalHistory",
          "medicationAdjustment",
          "fasting",
          "arrangements",
        ].map((key) => (
          <IMCBox key={key} style={styles.bulletRow}>
            <Icons.CircleIcon sx={styles.bulletIcon} />
            <IMCTypography
              size={fontSizes.md}
              variant="body"
              style={styles.bulletText}
            >
              <Trans
                i18nKey={`coronaryAngiogram.preparation.${key}`}
                components={{ bold: <strong /> }}
              />
            </IMCTypography>
          </IMCBox>
        ))}
      </>
    </IMCBox>
  );
};

const styles: Record<string, CSSProperties> = {
  centeredColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  leftAlignedColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  subheading: {
    marginTop: spacing.none,
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  bulletRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  bulletIcon: {
    color: colors.mintGreen,
    fontSize: "1.3rem",
    marginTop: spacing.xs,
  },
  bulletText: {
    margin: 1,
    padding: 0,
    lineHeight: 1.5,
  },
};

export default CoronaryAngiogram;
