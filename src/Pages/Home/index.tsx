import ContactUs from "../../components/contactUs";
import IMCBox from "../../components/IMCBox";
import Welcome from "./components/Welcome";
import OurServices from "./components/ourServices";
import Grid from "@mui/material/Grid";
import HomeBg from "../../assets/images/home.jpeg";
import { spacing } from "../../styles/spacing";
import Care from "./components/Care";
import SelectUs from "./components/selectUs";
import Hospitals from "./components/hospitals";
import Doctors from "./components/doctors";
import Procedures from "./components/procedure";

const Home = () => {
  return (
    <>
      <IMCBox
        margin={spacing.none}
        style={{
          backgroundImage: `url(${HomeBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8, sm: 8 }}>
            <Welcome />
          </Grid>
          <Grid size={{ xs: 12, md: 4, sm: 4 }}>
            <ContactUs />
          </Grid>
        </Grid>
        <div></div>
      </IMCBox>
      <OurServices />
      <Care />
      <SelectUs />
      <Hospitals />
      <Doctors />
      <Procedures />
    </>
  );
};

export default Home;
