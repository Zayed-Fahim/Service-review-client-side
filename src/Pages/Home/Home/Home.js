import React from "react";
import Review from "../../Review/Review";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import FilteredServices from "../Services/FilteredServices";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <About></About>
        <FilteredServices></FilteredServices>
        <Facilities></Facilities>
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
