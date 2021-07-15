import React from 'react';

const Bento = props => {
  const { bground, wrapper_id } = props;
  return (
    <div className={`bento-box ${bground}`} id={wrapper_id}>
      <div className='bento-box-header'>
        <p className='heading-secondary u-margin-top-xl'>bento box</p>
      </div>
      <div className='bento-box-subheader'>
        <p>Choose 2 or 3 items from below</p>
        <p>2 item box $19 | 3 item box $22</p>
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
              <p>chicken teriyaki</p>
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
                spicy pork bulgogi *{' '}
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
          src='http://mizusbg.com/mtnview/wp-content/uploads/sites/5/2013/03/bento-full-pg-header-1.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Bento;
