import React from 'react';
import {FieldType} from '../interface'
import Sheep from './Sheep'
import '../style/field.css';


const Field = (props: FieldType) => {
  const { sheep } = props;

  
  return (
    <div>
      <div className='fieldContainer'>
        {sheep.map((sheep, index) => {
          const { name, gender, id, branded } = sheep;
          return (
            <Sheep
              name={name}
              gender={gender}
              id={id}
              branded={branded}
              key={index}
            />
          );
        })}
      </div>
    </div>

  )
};

export default Field;