import ContactUs from "./components/contactUs";
import IMCBox from "../../components/IMCBox";
import VisitDoctors from "./components/visitDoctor";
// import { colors } from "../../styles/colors";
import OurServices from "./components/ourServices";
import Grid from "@mui/material/Grid";
import HomeBg from "../../assets/images/home.jpeg"
import { spacing } from "../../styles/spacing";
import Care from "./components/Care"
import HospitalsAndDoctors from "./components/hospitalsandDoctors";
import Hospitals from "./components/hospitals";

const Home = () => {
  return (
    <>
      <IMCBox margin={spacing.none}
         style={{
    backgroundImage: `url(${HomeBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8, sm: 8 }}>
            <VisitDoctors />
          </Grid>
          <Grid size={{ xs: 12, md: 4, sm: 4 }}>
            <ContactUs />
          </Grid>
        </Grid>
        <div></div>
      </IMCBox>
      <OurServices />
      <Care/>
      <HospitalsAndDoctors/>
      <Hospitals/>
    </>
  );
};

export default Home;
