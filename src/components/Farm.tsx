import * as React from 'react';
import { useState } from 'react';
import Field from './Field';
import HerdControl from './HerdControl'
import { SheepType } from '../interface';
import '../style/farm.css'


const Farm = () => {
  const [sheep, setSheep] = useState <SheepType[]>([])
  const [nextSheepId, setNextSheepId] = useState(0);
  const [freshLambId, setfreshLambId] = useState(1);


  const addSheep = (name: string, gender: 'Tup' | 'Ewe') => {
      const newSheep: SheepType = { name, gender, id: nextSheepId };
      setNextSheepId(nextSheepId + 1);
      setSheep([...sheep, newSheep]); 
  };

   const brandSheep = (sheepId: number) => {
    const tempSheep = sheep.map((sheep) => {
      sheep.id === sheepId ? (sheep.branded = !sheep.branded) : null;
      return sheep;
    });
    setSheep(tempSheep);
   };
  
  const brandRandomSheep = () => {
    const [sheep1Id] = selectTwoRandomSheepIds()
    brandSheep(sheep1Id)
  }
  
  const selectTwoRandomSheepIds = () => {
    const selectedSheep = sheep
      .filter((sheep: any) => sheep)
      .map((sheep: { id: any; }) => sheep.id);

    const [sheep1Id] = selectedSheep.splice(
      Math.floor(Math.random() * Math.floor(selectedSheep.length)),
      1
    );
    const [sheep2Id] = selectedSheep.splice(
      Math.floor(Math.random() * Math.floor(selectedSheep.length)),
      1
    );

    return [sheep1Id, sheep2Id];
  };

  const breedSheep = (sheep1Id: number, sheep2Id: number) => {
    const [sheep1] = sheep.filter((sheep: { id: number; }) => sheep.id === sheep1Id);
    const [sheep2] = sheep.filter((sheep: { id: number; }) => sheep.id === sheep2Id);

    if (
      sheep1.gender !== sheep2.gender &&
      !sheep1.branded &&
      !sheep2.branded
    ) {
      const breed = Math.random() < 0.5;
      if (breed) {
        const LambGender = Math.random() < 0.5 ? 'Tup' : 'Ewe';
        const newLambs = () => {
          setfreshLambId(freshLambId + 1);
          return `new Lamb ${freshLambId}`;
        };

        let newSheepName =
          prompt(
            `A new ${LambGender === 'Tup' ? "boy" : "girl"} give ${LambGender === "Tup" ? "him" : "her"
            } a name!`
          ) || newLambs();

        const newSheep: SheepType = {
          name: newSheepName,
          gender: LambGender,
          id: nextSheepId,
        };

        setSheep([...sheep, newSheep]);
      } else {
        alert(
          'Keep trying!'
        );
      }
    } 
  };
  
  const breedRandomSheep = () => {
    const [sheep1Id, sheep2Id] = selectTwoRandomSheepIds()
      breedSheep(sheep1Id, sheep2Id)
  };
    return (
      <div className='farm'>
        <Field sheep={sheep} />
        <div className='fieldsContainer'>
          <HerdControl
          addSheep={addSheep}
          brandRandomSheep={brandRandomSheep}
          breedRandomSheep={breedRandomSheep}
        />
        </div>
      </div>
    );
};
export default Farm;