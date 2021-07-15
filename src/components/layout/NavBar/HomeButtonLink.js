import React from 'react';
import { Link } from 'react-router-dom';

const HomeButtonLink = () => {
  return (
    <div className='navbar-container__right'>
      <Link to={'/'}>
        <p className='home-button'>
          <i class='fas fa-home'></i>
        </p>
      </Link>
    </div>
  );
};

export default HomeButtonLink;
