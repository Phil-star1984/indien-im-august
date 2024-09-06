import React from "react";
import Checklist from "../components/Checklist";
import ClimateAugust from "../components/ClimateAugust";
import HeroSection from "../components/HeroSection";
import ImageGallery from "../components/ImageGallery";
import Introduction from "../components/Introduction";
import MoneyAndPrices from "../components/MoneyAndPrices";
import PeopleAndCulture from "../components/PeopleAndCulture";
import SupportUs from "../components/SupportUs";
import VisaApplication from "../components/VisaApplication";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <HeroSection />

      <Introduction />

      <VisaApplication />

      <ClimateAugust />

      <PeopleAndCulture />

      <SupportUs />

      <MoneyAndPrices />

      <ImageGallery />

      <Checklist />

      <Contact />
    </>
  );
}

export default Home;
