import React from 'react';
import {useState} from 'react'
import { HerdControlType } from '../interface';
import '../style/herdControl.css'


const HerdControl = (props: HerdControlType) => {
  const {
    addSheep,
    brandRandomSheep,
    breedRandomSheep,
  } = props;

  const [newSheepName, setNewSheepName] = useState<string | null>(null);
  const [newSheepGender, setNewSheepGender] = useState<
    'Tup' | 'Ewe' | null
  >(null);

  const [TupCheck, setTupCheck] = useState(false);
  const [EweCheck, setEweCheck] = useState(false);


  return (
    <div className='HerdControls'>
      <div className=''>
       <h1>Herd</h1> 
      </div>
      <div>
        <div className='gender'>
          <input
            type='radio'
            value='Tup'
            id='Tup'
            name='newSheepGender'
            checked={TupCheck}
            onChange={(event) => {
              event.target.value === 'Tup' &&
                setNewSheepGender(event.target.value);
                setTupCheck(true);
                setEweCheck(false);
              }}
          ></input>
          <label>Tup</label>
          <input
            type='radio'
            value='Ewe'
            id='Ewe'
            name='newSheepGender'
            checked={EweCheck}
            onChange={(event) => {
              event.target.value === 'Ewe' &&
                setNewSheepGender(event.target.value);
                setEweCheck(true);
                setTupCheck(false);
            }}
            ></input>
              <label>Ewe</label>
        </div>
        <input
          name='SheepName'
          type='text'
          value={newSheepName !== null ? newSheepName : ''}
          onChange={(event) => setNewSheepName(event.target.value)}
          placeholder='Name your sheep'
        ></input>
        {newSheepName && newSheepGender ? (
          <button
            onClick={() => {
              addSheep(newSheepName, newSheepGender);
              setNewSheepGender(null);
              setNewSheepName(null);
              setTupCheck(false);
              setEweCheck(false);
              }}
              >
              Add sheep
              </button>
            ) : (
              <button disabled>Add sheep</button>
            )}
          </div>
          <div className='Brand'>
            <button onClick={brandRandomSheep}>
              Brand at random
            </button>
          </div>
          <div className='breed'>
            <button onClick={breedRandomSheep}>Breed at random</button> 
          </div>
    </div>
  );
};

export default HerdControl;