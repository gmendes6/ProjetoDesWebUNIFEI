import React, { useEffect, useState } from "react"; // Combinei ambos os imports
import Navbar from "../components/Navbar/Navbar";
import Equipments from "../components/Equipments/Equipments";
import TabComp from "../components/Tab/TabComp";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Banner2 from "../components/Banner/Banner2";

export const Home = () => {
    return <>
        
        <div >
          <Navbar />
          <Equipments />
          <TabComp />
          <Testimonials />
          <Banner2 />
          <Footer />
        </div>
    </>
}  