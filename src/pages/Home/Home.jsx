import React from "react";
import Business from "../../components/Home/Business"
import FAQ from "../../components/Home/FAQ";
import HRSoftwareSection from "../../components/Home/HRSoftwareSection";
import Banner from "./../../components/Home/Banner";
import OurAchievements from "./../../components/Home/OurAchievements";
import Services from "./../../components/Home/Services";
import Testimonials from "./../../components/Home/Testimonials";
import Celebrating from "../../components/Home/Celebrating";
import OurStory from "../../components/Home/OurStory";
import Mission from "../../components/Home/Mission";
import Vision from "../../components/Home/Vision";

function Home() {
  return (
    <div>
      <Banner />
      <Celebrating />
      <OurStory />
      <Mission />
      <Vision />
      <Services />
      <Testimonials />
      <Business />
      <HRSoftwareSection />
      <OurAchievements />
      <FAQ />
    </div>
  );
}

export default Home;