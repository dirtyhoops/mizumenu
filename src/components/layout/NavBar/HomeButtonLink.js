import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HomeButtonLink = () => {
  return (
    <div className='navbar-container__right'>
      <Link to={'/'}>
        <p className='home-button'>
          <FontAwesomeIcon icon={faHome} />
        </p>
      </Link>
    </div>
  );
};

export default HomeButtonLink;
