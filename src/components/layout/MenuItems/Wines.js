import React, { Fragment } from 'react';

const Wines = (props) => {
  const { bground, items, items2, wrapper_id } = props;
  return (
    <Fragment>
      <div className={`wines-box ${bground}`} id='wines'>
        <div className='wines-box-header'>
          <p className='heading-secondary'>Wines</p>
        </div>
        <div className='wines-box-container'>
          <ul>
            {/* // start the component here */}
            <li>
              <p className='wines-text-type'>RED</p>
              <p className='wines-text-name'>
                josh cellars legacy
                <span className='wines-text-span'> - Ca</span>
              </p>
              <p className='wines-text-price-glass'>9</p>
              <p className='wines-text-price-bottle'>34</p>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Wines;
