import React from "react";
import Header from "../components/header/page";
import HeroSection from "../components/heroSection/page";
import DropDownSection from "../components/dropDownSection/page";
import Footer from "../components/footer/page";
const MainLayout = () => {
  return (
    <div className="bg-white">
      <Header></Header>
      <HeroSection></HeroSection>
      <DropDownSection></DropDownSection>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
