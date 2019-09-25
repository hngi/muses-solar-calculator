import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-main">
        <div className="home-body">
          <h1 className="home-header">Muse Solar Calculator</h1>
          <p className="home-text">
            The Muse Solar Calculator enables you calculate <br /> the exact
            amount of solar panels, inverters and <br /> electricity you would
            need for your home.
          </p>
          <Link className="home-get-started" to="/calculate">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home

