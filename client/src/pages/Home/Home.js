import React from "react";
import TopBanner from "../../components/TopBanner/TopBanner";
import About from "../../components/About/About";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";
import Features from "../../components/Features/Features";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Features />
      <About />
      <Partners />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
