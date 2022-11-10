import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import FilteredServices from "../Services/FilteredServices";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <About></About>
        <FilteredServices></FilteredServices>
      </div>
    </div>
  );
};

export default Home;
