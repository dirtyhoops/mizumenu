import React from 'react';

import Alaska from '../../../img/alaska.jpg';
import AlbacoreDelight from '../../../img/albacoredelight.jpg';
import AssortedTempura from '../../../img/assortedtempura.jpg';
import BeefBulgogi from '../../../img/beefbulgogi.jpg';
import Butterfly from '../../../img/butterfly.jpg';
import CajunTuna from '../../../img/cajuntuna.jpg';
import Calamari from '../../../img/calamari.jpg';
import CherryBlossom from '../../../img/cherryblossom.jpg';
import ChickenBulgogi from '../../../img/chickenbulgogi.jpg';
import ChickenKatsu from '../../../img/chickenkatsu.jpg';
import Chirashi from '../../../img/chirashi.jpg';
import CitrusSearedSalmon from '../../../img/citrussearedsalmon.jpg';
import CrazyDragon from '../../../img/crazydragon.jpg';
import CrispyRice from '../../../img/crispyrice.jpg';
import Croquette from '../../../img/croquete.jpg';
import Dragon from '../../../img/dragon.jpg';
import Galbi from '../../../img/galbi.jpg';
import GreenDragon from '../../../img/greendragon.jpg';
import Gyoza from '../../../img/gyoza.jpg';
import HamachiKama from '../../../img/hamachikama.jpg';
import HoneymoonSpecial from '../../../img/honeymoonspecial.jpg';
import HotMango from '../../../img/hotmango.jpg';
import HouseBoat from '../../../img/houseboat.jpg';
import Hurricane from '../../../img/hurricane.jpg';
import KakeUdon from '../../../img/kakeudon.png';
import MisoBlackCod from '../../../img/misoblackcod.jpg';
import MizuBomb from '../../../img/mizubomb.jpg';
import MizuHouseSalad from '../../../img/mizuhousesalad.jpg';
import MizuJumbo from '../../../img/mizujumbo.jpg';
import Mussels from '../../../img/mussels.jpg';
import NabeyakiUdon from '../../../img/nabeyakiudon.jpg';
import PopcornLobster from '../../../img/popcornlobster.jpg';
import PorkDonburi from '../../../img/porkdonburi.jpg';
import Rainbow from '../../../img/rainbow.jpg';
import RedDragon from '../../../img/reddragon.jpg';
import Sakura from '../../../img/sakura.jpg';
import SalmonCarpaccio from '../../../img/salmoncarpaccio.jpg';
import SalmonTeriyaki from '../../../img/salmonteriyaki.jpg';
import SashimiNinePcs from '../../../img/sashimininepcs.jpg';
import Seaweed from '../../../img/seaweed.png';
import SignatureBoat from '../../../img/signatureboat.jpg';
import SpicyCrunch from '../../../img/spicycrunch.jpg';
import SpicyPopcorn from '../../../img/spicypopcorn.jpg';
import SpicyPorkBulgogi from '../../../img/spicyporkbulgogi.jpg';
import SpicyTunaSalad from '../../../img/spicytunasalad.jpg';
import Sunkissed from '../../../img/sunkissed.jpg';
import SuperGodzilla from '../../../img/supergodzilla.jpg';
import SuperSpider from '../../../img/superspider.jpg';
import SushiDinner from '../../../img/sushidinner.jpg';
import SushiSashimiDinner from '../../../img/sushisashimidinner.jpg';
import TempuraUdon from '../../../img/tempuraudon.png';
import Titanic from '../../../img/titanic.jpg';
import AgedashiTofu from '../../../img/tofu.jpg';
import TunaTartar from '../../../img/tunatartar.jpg';
import UnagiLover from '../../../img/unagilover.jpg';
import YamiYami from '../../../img/yamiyami.jpg';
import YellowtailSpecial from '../../../img/yellowtailspecial.jpg';
import YellowtailCrudo from '../../../img/yellowtailcrudo.jpg';
import YellowtailTartar from '../../../img/yellowtailtartar.jpg';

const MenuItems = props => {
  const {
    bground,
    items,
    header,
    images,
    wrapper_id,
    bigpicture,
    handleShowDialog
  } = props;
  return (
    <div className={`dinner-box ${bground}`} id={wrapper_id}>
      <div className='dinner-box-header'>
        <p className='heading-secondary'>{header}</p>
      </div>
      <div className='dinner-box-container'>
        <div className='dinner-box-container__images'>
          {images.map((image, index) => (
            <div key={index} className='dinner-box-container__images__box'>
              <img
                src={image.link}
                alt='nada'
                onClick={() => handleShowDialog(image.link)}
              />
              <p className='dinner-box-container__images__box-text'>
                {image.name}
              </p>
            </div>
          ))}
        </div>
        <div className='dinner-box-container__items'>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <p className='list-name'>
                  {item.name}
                  {item.isSpicy && (
                    <i className='fas fa-pepper-hot icon-hotpepper'></i>
                  )}{' '}
                  {item.isGlutenFree && <span className='icon-gf'>gf</span>}
                </p>
                <p className='list-price'>{item.price}</p>
                <p className='list-description'>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {bigpicture === 'true' && (
        <div className='dinner-box-container__bigpicture'>
          <img
            src={
              'http://mizusbg.com/sanjose/wp-content/uploads/sites/3/2015/01/signature-boat-1.jpg'
            }
            alt=''
          />
        </div>
      )}
    </div>
  );
};

export default MenuItems;
