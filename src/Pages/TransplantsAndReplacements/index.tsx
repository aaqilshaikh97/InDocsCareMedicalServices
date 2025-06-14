
import IMCTypography from "../../components/IMCTypography";
import { fontSizes } from "../../constants/fontSizes";
import { fontWeights } from "../../constants/fontWeights";

const TransplantsAndReplacements = () => {
  return (
    <>
     <IMCTypography variant="h3" size={fontSizes.lg} weight={fontWeights.semiBold}>
        Transplants & Replacements
     </IMCTypography>
     <IMCTypography variant="body" size={fontSizes.sm} weight={fontWeights.light}>
        This page is under development
     </IMCTypography>
    </>
  );
};

export default TransplantsAndReplacements;