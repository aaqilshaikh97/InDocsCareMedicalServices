import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import TransplantsAndReplacements from "./Pages/TransplantsAndReplacements";
import TreatmentsAndSurgeries from "./Pages/TreatmentsAndSurgeries";
import Doctors from "./Pages/Doctors";
import Hospitals from "./Pages/Hospitals";
import Blogs from "./Pages/Blogs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
     <div>
      <Header />
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TransplantsAndReplacements" element={<TransplantsAndReplacements />} />
          <Route path="/TreatmentsAndSurgeries" element={<TreatmentsAndSurgeries />} />
          <Route path="/Doctors" element={<Doctors />} />
          <Route path="/Hospitals" element={<Hospitals />} />
          <Route path="/Blogs" element={<Blogs />} />

        </Routes>
      <Footer/>

    </div>
  );
}

export default App;
