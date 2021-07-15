import React from 'react';
import { makiRolls, vegetarianRolls } from '../../../datas/lunchItems';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faLeaf } from '@fortawesome/free-solid-svg-icons';

const MakiRolls = props => {
  const { bground } = props;
  return (
    <div className={`dinner-box ${bground}`} id='maki'>
      <div className='dinner-box-header'>
        <p className='heading-secondary'>Maki Roll</p>
      </div>
      <div className='makiroll-box-container'>
        <ul>
          {makiRolls.map((item, index) => (
            <li key={index}>
              <p className='makiroll-list-name'>
                {item.name}
                {item.isSpicy && (
                  <FontAwesomeIcon
                    className='icon-hotpepper'
                    icon={faPepperHot}
                  />
                )}
              </p>
              <p className='makiroll-list-price'>{item.price}</p>
            </li>
          ))}
        </ul>
        <ul>
          {vegetarianRolls.map((item, index) => (
            <li key={index}>
              <p className='makiroll-list-name'>
                {item.name}
                <FontAwesomeIcon className='icon-leaf' icon={faLeaf} />
              </p>
              <p className='makiroll-list-price'>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MakiRolls;
