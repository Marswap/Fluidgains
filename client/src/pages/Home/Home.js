import React from "react";
import TopBanner from "../../components/TopBanner/TopBanner";
import About from "../../components/About/About";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";
import Features from "../../components/Features/Features";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  return (
    <div>
      <TopBanner />
      <Features />
      <About />
      <Partners />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
