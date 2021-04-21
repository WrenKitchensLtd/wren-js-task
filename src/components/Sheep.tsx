import React from 'react';
import {SheepType}  from '../interface'
import '../style/sheep.css';

const Sheep = (props: SheepType) => {
  const {
    name,
    gender,
    id,
    branded,
    sheepSelectedNumber,
    selectSheep,
  } = props
  
  return (
    <div className={`sheep${branded ? ' sheep--branded' : ''}${
        sheepSelectedNumber ? ` sheep--selectedSheep${sheepSelectedNumber}` : ''
      }`}>
      <div className='sheepHead'></div>
       <div
        onClick={(event) => {
        event.stopPropagation();
        selectSheep && selectSheep(id);
      }}
      key={id}
    >
      <div className='sheep__name'>{`${name}`}</div>
      <div className='sheep__gender'>{gender}</div>
    </div>
   </div>
  )
}

export default Sheep;