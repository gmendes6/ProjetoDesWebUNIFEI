import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Equipments from "../components/Equipments/Equipments";
import TabComp from "../components/Tab/TabComp";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Banner2 from "../components/Banner/Banner2"


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Equipments />
      <TabComp />
      <Testimonials />
      <Banner2/>
    </div>
  );
};

export default App;
