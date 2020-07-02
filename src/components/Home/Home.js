import React from 'react';
import HomeHeader from './HomeHeader';
import './Home.scss';
import MainContainer from "./MainContainer";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <MainContainer />
    </div>
  );
};

export default Home;
