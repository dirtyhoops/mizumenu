import React from 'react';

const Bento = (props) => {
  const { bground, bento, bento1, wrapper_id } = props;
  return (
    <div className={`bento-box ${bground}`} id={wrapper_id}>
      <div className='bento-box-header'>
        <p className='heading-secondary'>kids menu</p>
      </div>
      <div className='bento-box-subheader'>
        <p>Choice of Entree</p>
        <p>Served with rice & sweet potato fries</p>
      </div>
      <div className='bento-box-container'>
        <div className='bento-box-container__left'>
          <p className='bento-box-kids-type'>TERIYAKI</p>
          <ul>
            <li className='bento-box-li-flex'>
              <p>Chicken </p>
              <p>12.5</p>
            </li>
            <li className='bento-box-li-flex'>
              <p>Beef or Salmon</p>
              <p>15.5</p>
            </li>
          </ul>
        </div>
        <div className='bento-box-container__right'>
          <p className='bento-box-kids-type'>KATSU</p>
          <ul>
            <li className='bento-box-li-flex'>
              <p>Chicken </p>
              <p>13.5</p>
            </li>
            <li className='bento-box-li-flex'>
              <p>Pork</p>
              <p>13.5</p>
            </li>
          </ul>
        </div>
      </div>

      <div className='bento-box-header'>
        <p className='heading-secondary u-margin-top-xl'>bento box</p>
      </div>
      <div className='bento-box-subheader'>
        <p>Choose 2 or 3 items from below</p>
        <p>2 item box $15.5 | 3 item box $17.5</p>
      </div>
      <div className='bento-box-container'>
        <div className='bento-box-container__left'>
          <ul>
            <li>
              <p>gyoza</p>
              <p>agedashi tofu</p>
            </li>
            <li>
              <p>veggie tempura</p>
              <p>assorted tempura</p>
            </li>
            <li>
              <p>pork katsu</p>
              <p>chicken katsu</p>
            </li>
            <li>
              <p>beef teriyaki</p>
              <p>salmon teriyaki</p>
              <p>beef teriyaki *</p>
            </li>
          </ul>
        </div>
        <div className='bento-box-container__right'>
          <ul>
            <li>
              <p>beef bulgogi *</p>
              <p>
                spicy portk bulgogi *{' '}
                <i className='fas fa-pepper-hot icon-hotpepper'></i>
              </p>
            </li>
            <li>
              <p>tuna roll</p>
              <p>avocado roll</p>
              <p>california roll</p>
              <p>
                spicy tuna roll{' '}
                <i className='fas fa-pepper-hot icon-hotpepper'></i>
              </p>
              <p>
                cucumber roll <i className='fas fa-leaf icon-leaf'></i>
              </p>
            </li>
            <li>
              <p className='bento-box-list-name no-text-transform'>
                Sushi [2pcs salmon or tuna] *
              </p>
              <p className='bento-box-list-name no-text-transform'>
                Sashimi [3pcs salmon or tuna] *
              </p>
            </li>
          </ul>
        </div>
      </div>
      <p className='bento-box-asterisk'>* No double orders for select items</p>
      <div className='bento-box-image'>
        <img
          src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/26904626_1086278014848082_999476936117865523_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_oc=AQn6ii671rhELmwB_yXxtYvG7MDGC0aJtJ0MqjeTV9T45WVmSntvPKf0Yvn1o8G4RjR4RNQjgl1lN_RSudmUn7US&_nc_ht=scontent-sjc3-1.xx&oh=0cdea79c0e9f8adb3069e6466ef4bc08&oe=5F177445'
          alt=''
        />
      </div>
    </div>
  );
};

export default Bento;
