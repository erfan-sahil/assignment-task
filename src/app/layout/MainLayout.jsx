import React from "react";
import Header from "../components/header/page";
import HeroSection from "../components/heroSection/page";
const MainLayout = () => {
  return (
    <div className="bg-white">
      <Header></Header>
      <HeroSection></HeroSection>
    </div>
  );
};

export default MainLayout;
