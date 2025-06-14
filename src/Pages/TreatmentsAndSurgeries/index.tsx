import IMCTypography from "../../components/IMCTypography";
import { fontSizes } from "../../constants/fontSizes";
import { fontWeights } from "../../constants/fontWeights";

const TreatmentsAndSurgeries = () => {
  return (
    <>
     <IMCTypography variant="h3" size={fontSizes.lg} weight={fontWeights.semiBold}>
        Treatments & Surgeries
     </IMCTypography>
     <IMCTypography variant="body" size={fontSizes.sm} weight={fontWeights.light}>
        This page is under development
     </IMCTypography>
    </>
  );
};

export default TreatmentsAndSurgeries;