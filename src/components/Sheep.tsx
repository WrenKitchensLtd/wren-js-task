import React from 'react';
import {SheepType}  from '../interface'
import '../style/sheep.css';

const Sheep = (props: SheepType) => {
  const {
    name,
    gender,
    branded,
  } = props
  
  return (
    <div className={`sheep${branded ? ' sheep--branded' : ''}
      `}>
      <div>
      <div className='sheepHead'></div>
      <div className='sheep__name'>{`${name}`}</div>
      <div className='sheep__gender'>{gender}</div>
    </div>
   </div>
  )
}

export default Sheep;