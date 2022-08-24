import React from "react";
import TopBanner from "../../components/TopBanner/TopBanner";
import About from "../../components/About/About";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Team from "../../components/Team/Team";
import Vault from "../../components/Vault/Vault";
const Home = () => {
  return (
    <div>
      <TopBanner />
      <Vault />
      <About />
      <Partners />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
