import React, { Fragment, useState } from 'react';
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
  // ALL THIS IS FOR THE IMAGE ZOOM
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleShowDialog = currImg => {
    setIsOpen(!isOpen);
    setCurrentImage(currImg);
    console.log('cliked');
  };
  return (
    <Fragment>
      <NavBar />
      {isOpen && (
        <dialog className='dialog' open onClick={() => handleShowDialog()}>
          <img
            className='zoomed-image'
            src={currentImage}
            onClick={() => handleShowDialog()}
            alt='nada'
          />
        </dialog>
      )}

      <div className='dinner-wrapper'>
        <Bento
          bground={'blackwhite'}
          wrapper_id={'bento'}
          bento={bento}
          bento1={bento1}
        />
        <Sides
          bground={'blackwhite'}
          items={lunchSides}
          images={sideImages}
          handleShowDialog={handleShowDialog}
        />
        <MenuItems
          bground={'blackwhite'}
          header={'salads'}
          wrapper_id={'salads'}
          items={dinnerSalad}
          images={saladImages}
          handleShowDialog={handleShowDialog}
        />
        <MenuItems
          bground={'whiteblack'}
          header={'hot appetizers'}
          wrapper_id={'hotappetizers'}
          items={lunchHotAppetizers}
          images={lunchHotAppetizersImages}
          handleShowDialog={handleShowDialog}
        />

        <MenuItems
          bground={'blackwhite'}
          header={'cold appetizers'}
          wrapper_id={'coldappetizers'}
          items={lunchColdAppetizers}
          images={lunchColdAppetizersImages}
          handleShowDialog={handleShowDialog}
        />
        <MenuItems
          bground={'whiteblack'}
          header={'special rolls'}
          wrapper_id={'specialrolls'}
          items={sushiRolls}
          images={rollsImages}
          handleShowDialog={handleShowDialog}
        />
        <SushiSashimi bground={'blackwhite'} />
        <MenuItems
          bground={'blackwhite'}
          header={'sushi & sashimi lunch'}
          wrapper_id={'sushidinner'}
          items={lunchSushiSashimi}
          images={sushiSashimiImages}
          bigpicture={'true'}
          handleShowDialog={handleShowDialog}
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
          handleShowDialog={handleShowDialog}
        />

        <KidsMeal bground={'blackwhite'} wrapper_id={'bento'} />
      </div>
    </Fragment>
  );
};

export default LunchMenu;
