import IMCTypography from "../../components/IMCTypography";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";
import { useTranslation } from "react-i18next";

const Blogs = () => {
       const { t } = useTranslation();

  return (
    <>
     <IMCTypography variant="h3" size={fontSizes.lg} weight={fontWeights.semiBold}>
                {t("blogsPage.title")}

     </IMCTypography>
     <IMCTypography variant="body" size={fontSizes.sm} weight={fontWeights.light}>
        {t("blogsPage.underDevelopment")}
     </IMCTypography>
    </>
  );
};

export default Blogs;