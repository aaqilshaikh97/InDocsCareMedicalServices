import IMCTypography from "../../components/IMCTypography";
import { fontSizes } from "../../constants/fontSizes";
import { fontWeights } from "../../constants/fontWeights";

const Blogs = () => {
  return (
    <>
     <IMCTypography variant="h3" size={fontSizes.lg} weight={fontWeights.semiBold}>
        Blogs
     </IMCTypography>
     <IMCTypography variant="body" size={fontSizes.sm} weight={fontWeights.light}>
        This page is under development
     </IMCTypography>
    </>
  );
};

export default Blogs;