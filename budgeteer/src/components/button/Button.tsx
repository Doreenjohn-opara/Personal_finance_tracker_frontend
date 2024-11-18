import React from 'react';
import { IButton } from '../../utils/interface.utils';
import { Link } from 'react-router-dom';

const Button = (props: IButton) => {
    const {
        type,
        text,
        onClick
    } = props;
  return (
    <>
        <div className='form-group ui-relative mrgt2'>
            <button className='btn font-aeonik-bold onwhite' onClick={()=>onClick} type="button">
                 {text}
            </button> 
        </div>
    </>
    
  )
}

export default Button;