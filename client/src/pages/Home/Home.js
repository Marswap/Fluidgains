import React from "react";
import TopBanner from "../../components/TopBanner/TopBanner";
import About from "../../components/About/About";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Team from "../../components/Team/Team";
const Home = () => {
  return (
    <div>
      <TopBanner />
      <About />
      <Partners />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
