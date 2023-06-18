import './countProduct.scss';
// import { useState } from 'react';
export function CountButton(props) {


    

  return (
    <> 
      <div className='counter'>
              <button className='counter__btn' onClick={props.onClickMinus}>-</button>
              <p className='counter__number'>{props.count}</p>
              <button className='counter__btn' onClick={props.onClickPlus}>+</button>
      </div> 
    </>
  );
}

export default CountButton;