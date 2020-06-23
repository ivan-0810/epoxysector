import React from 'react';
import HomeHeader from './HomeHeader';
import './Home.scss';
import { Container } from 'reactstrap';
import frontImg from '../../images/Sredeni od Mete 2/DSCF0183.jpg';

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <Container className='main-containner'>
        <div className="img-txt">
          <div className="img-box">
            <img src={frontImg} alt="" />
          </div>
          <div>
            <h1>Tekst</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae, eius deserunt magni distinctio dolore iste ex tempora
              blanditiis architecto praesentium saepe in voluptatibus, esse eos!
              Molestias molestiae sapiente animi suscipit.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
