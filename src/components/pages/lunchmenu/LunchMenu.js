import React, { Fragment } from 'react';
import MenuItems from '../../layout/MenuItems/MenuItems';
import SushiSashimi from '../../layout/MenuItems/SushiSashimi';
import Sides from '../../layout/MenuItems/Sides';
import NavBar from '../../layout/NavBar/NavBar';
import MakiRolls from '../../layout/MenuItems/MakiRolls';
import Bento from '../../layout/MenuItems/Bento';
import KidsMeal from '../../layout/MenuItems/KidsMeal';
import DinnerMenuItem from '../../layout/MenuItems/DinnerMenuItem';

import {
  lunchHotAppetizers,
  lunchColdAppetizers,
  sushiRolls,
  lunchEntrees,
  lunchSushiSashimi,
  lunchSides,
  bento,
  bento1
} from '../../../datas/lunchItems';

import {
  dinnerSalad,
  dinnerUdon,
  dinnerDonburi,
  dinnerEntrees
} from '../../../datas/dinnerItems';

import {
  lunchColdAppetizersImages,
  rollsImages,
  lunchHotAppetizersImages,
  entreesImages,
  sushiSashimiImages,
  sideImages,
  saladImages
} from '../../../datas/itemsImages';

const LunchMenu = () => {
  return (
    <Fragment>
      <NavBar />

      <div className='dinner-wrapper'>
        <Bento
          bground={'blackwhite'}
          wrapper_id={'bento'}
          bento={bento}
          bento1={bento1}
        />
        <Sides bground={'blackwhite'} items={lunchSides} images={sideImages} />
        <MenuItems
          bground={'blackwhite'}
          header={'salads'}
          wrapper_id={'salads'}
          items={dinnerSalad}
          images={saladImages}
        />
        <MenuItems
          bground={'whiteblack'}
          header={'hot appetizers'}
          wrapper_id={'hotappetizers'}
          items={lunchHotAppetizers}
          images={lunchHotAppetizersImages}
        />

        <MenuItems
          bground={'blackwhite'}
          header={'cold appetizers'}
          wrapper_id={'coldappetizers'}
          items={lunchColdAppetizers}
          images={lunchColdAppetizersImages}
        />
        <MenuItems
          bground={'whiteblack'}
          header={'special rolls'}
          wrapper_id={'specialrolls'}
          items={sushiRolls}
          images={rollsImages}
        />
        <SushiSashimi bground={'blackwhite'} />
        <MenuItems
          bground={'blackwhite'}
          header={'sushi & sashimi lunch'}
          wrapper_id={'sushidinner'}
          items={lunchSushiSashimi}
          images={sushiSashimiImages}
          bigpicture={'true'}
        />

        <MakiRolls bground={'whiteblack'} />

        <DinnerMenuItem
          bground={'blackwhite'}
          header={'entrees'}
          wrapper_id={'entrees'}
          items={dinnerEntrees}
          dinnerUdon={dinnerUdon}
          dinnerDonburi={dinnerDonburi}
          images={entreesImages}
        />

        <KidsMeal bground={'blackwhite'} wrapper_id={'bento'} />
      </div>
    </Fragment>
  );
};

export default LunchMenu;
