import { useTranslation } from "react-i18next";
import IMCButton from "../../../../components/IMCButton";
import { colors } from "../../../../styles/colors";
import IMCBox from "../../../../components/IMCBox";
import { spacing } from "../../../../styles/spacing";
import IMCTypography from "../../../../components/IMCTypography";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { Trans } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <>
      <IMCBox margin={spacing.md}>
        {/* <IMCButton
          bgColor={colors.primaryDarkBlue}
          textColor={colors.white}
          text={t("navbar.visitDoctors")}
          onClick={() => alert("Button clicked!")}
        />
        <IMCButton
          bgColor={colors.primaryDarkBlue}
          textColor={colors.white}
          text={t("navbar.visitHospitals")}
          onClick={() => alert("Button clicked!")}
        /> */}

        <IMCBox
          margin={spacing.md}
          style={{
            paddingTop: spacing.xxxl,
          }}
        >
          <IMCTypography
            variant="h3"
            size={fontSizes.xxl}
            weight={fontWeights.semiBold}
            color={colors.white}
          >
            <Trans i18nKey="home.headline" components={{ br: <br /> }} />
          </IMCTypography>

          <IMCTypography
            variant="body"
            size={fontSizes.md}
            weight={fontWeights.light}
            color={colors.iceBlue}
          >
            <Trans
              i18nKey="home.description"
              components={{
                bold: <span style={{ fontWeight: fontWeights.extraBold }} />,
                br: <br />,
              }}
            />
          </IMCTypography>
          <IMCButton
          fontSize={fontSizes.md}
            bgColor={colors.iceBlue}
            textColor={colors.primaryDarkBlue}
            fontWeight={fontWeights.semiBold}
            text={t("navbar.FreeConsultWithDRs")}
            onClick={() => alert("Button clicked!")}
          />
        </IMCBox>
      </IMCBox>
    </>
  );
};

export default Welcome;
