import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Equipments from "../components/Equipments/Equipments";
import TabComp from "../components/Tab/TabComp";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Banner2 from "../components/Banner/Banner2"

import React, { useEffect, useState } from "react"

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Faz a chamada à API do backend na Vercel
    fetch('/api/ssr')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error fetching the API:', error));
  }, []);

  return (
    <div>
     <Navbar />
      <Equipments />
      <TabComp />
      <Testimonials />
      <Banner2/>
      <p>{data ? data : "Loading data from API..."}</p>
    </div>
  );
};

export default HomePage;
