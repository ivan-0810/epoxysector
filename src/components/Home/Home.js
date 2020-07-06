import React from 'react';
import HomeHeader from './HomeHeader';
import './Home.scss';
import MainContainer from "./MainContainer";
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default Home;
