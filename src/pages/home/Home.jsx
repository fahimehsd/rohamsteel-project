import React from "react";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import News from "../../components/news/News";
import More from "../../components/more/More";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <News />
      <More />
    </>
  );
};

export default Home;
