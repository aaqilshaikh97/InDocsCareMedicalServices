
import IMCTypography from "../../components/IMCTypography";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";
import { useTranslation } from "react-i18next";

const TransplantsAndReplacements = () => {
       const { t } = useTranslation();

  return (
    <>
     <IMCTypography variant="h3" size={fontSizes.lg} weight={fontWeights.semiBold}>
        {t("transplantsPage.title")}
     </IMCTypography>
     <IMCTypography variant="body" size={fontSizes.sm} weight={fontWeights.light}>
        {t("transplantsPage.underDevelopment")}
     </IMCTypography>
    </>
  );
};

export default TransplantsAndReplacements;