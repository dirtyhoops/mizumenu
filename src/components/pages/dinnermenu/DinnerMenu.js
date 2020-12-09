import React, { Fragment, useState } from 'react';
import MenuItems from '../../layout/MenuItems/MenuItems';
import SushiSashimi from '../../layout/MenuItems/SushiSashimi';
import MakiRolls from '../../layout/MenuItems/MakiRolls';
import Sides from '../../layout/MenuItems/Sides';
import NavBar from '../../layout/NavBar/NavBar';
import KidsMeal from '../../layout/MenuItems/KidsMeal';
import DinnerMenuItem from '../../layout/MenuItems/DinnerMenuItem';

import {
  dinnerHotAppetizers,
  dinnerColdAppetizers,
  sushiRolls,
  dinnerEntrees,
  dinnerSides,
  dinnerSushiSashimi,
  dinnerSalad,
  dinnerUdon,
  dinnerDonburi
} from '../../../datas/dinnerItems';

import {
  coldAppetizersImages,
  rollsImages,
  hotAppetizersImages,
  entreesImages,
  sideImages,
  sushiSashimiImages,
  saladImages
} from '../../../datas/itemsImages';

const DinnerMenu = () => {
  // ALL THIS IS FOR THE IMAGE ZOOM
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleShowDialog = currImg => {
    setIsOpen(!isOpen);
    setCurrentImage(currImg);
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
        <Sides
          bground={'blackwhite'}
          items={dinnerSides}
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
          items={dinnerHotAppetizers}
          images={hotAppetizersImages}
          handleShowDialog={handleShowDialog}
        />

        <MenuItems
          bground={'blackwhite'}
          header={'cold appetizers'}
          wrapper_id={'coldappetizers'}
          items={dinnerColdAppetizers}
          images={coldAppetizersImages}
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
          header={'sushi & sashimi dinner'}
          wrapper_id={'sushidinner'}
          items={dinnerSushiSashimi}
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

export default DinnerMenu;
