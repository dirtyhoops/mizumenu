import React, { Fragment } from 'react';
import DrinkNavBar from '../../layout/NavBar/DrinkNavBar';
import Cocktails from '../../layout/MenuItems/Cocktails';
import { cocktails, cocktails2 } from '../../../datas/drinkItems';
import SakeBeer from '../../layout/MenuItems/SakeBeer';
// import Wines from '../../layout/MenuItems/Wines';

const DrinkMenu = () => {
  return (
    <Fragment>
      <DrinkNavBar />
      <div className='drinks-wrapper'>
        <Cocktails
          bground={'blackwhite'}
          items={cocktails}
          items2={cocktails2}
          wrapperid={'cocktails'}
        />
        <SakeBeer bground={'blackwhite'} />
        {/* <Wines bground={'whiteblack'} /> */}
      </div>
    </Fragment>
  );
};

export default DrinkMenu;
