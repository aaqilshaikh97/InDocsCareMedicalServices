import IMCTypography from "../../components/IMCTypography";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";
import { useTranslation } from "react-i18next";

const Doctors = () => {
  const { t } = useTranslation();

  return (
    <>
      <IMCTypography
        variant="h3"
        size={fontSizes.lg}
        weight={fontWeights.semiBold}
      >
        {t("doctorsPage.title")}
      </IMCTypography>
      <IMCTypography
        variant="body"
        size={fontSizes.sm}
        weight={fontWeights.light}
      >
        {t("doctorsPage.underDevelopment")}
      </IMCTypography>
    </>
  );
};

export default Doctors;
