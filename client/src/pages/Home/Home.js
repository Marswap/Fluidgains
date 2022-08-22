import React from "react";
import TopBanner from "../../components/TopBanner/TopBanner";
import About from "../../components/About/About";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";
const Home = () => {
  return (
    <div>
      <TopBanner />
      <About />
      <Partners />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
