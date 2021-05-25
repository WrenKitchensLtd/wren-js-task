import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { Field, Form, Brander, Breeder, EventLog } from "../components";

import { useSheepBreeder, useEventLog } from "../utilities";

import { Sheep, Gender } from "../types";

/**
 * The base component for the application.
 * @returns Application base component
 */
const App = () => {
  const [sheep, setSheep] = useState<Sheep[]>([]);

  const { attemptBreed, selectRandomSheep, filterUnBrandedSheepByGender } =
    useSheepBreeder();

  const { logs, logSuccess, logFailure } = useEventLog();

  /**
   * Handles adding a new sheep to the field.
   * @param e onSubmit event
   * @param name The name of the sheep
   * @param gender The gender of the sheep
   */
  const handleAddNewSheepSubmit = (
    e: React.FormEvent,
    name: string,
    gender: string
  ) => {
    e.preventDefault();
    setSheep((sh) => [
      ...sh,
      { id: uuid(), name, gender, branded: false } as Sheep,
    ]);
    logSuccess(`${name}: ${gender} was added to the field`);
  };

  /**
   * Handles branding a random unbranded sheep in the field
   * @param _ onClick event
   */
  const brandRandomSheep = (_: React.MouseEvent<HTMLButtonElement>) => {
    const unBrandedSheep = sheep.filter((sh) => sh.branded === false);

    if (unBrandedSheep.length) {
      const sheepToBrand =
        unBrandedSheep[Math.floor(Math.random() * unBrandedSheep.length)];

      setSheep((sh) => [
        ...sh.filter((s) => s.id !== sheepToBrand.id),
        { ...sheepToBrand, branded: true } as Sheep,
      ]);

      logSuccess(`${sheepToBrand.name} was branded.`);
    } else {
      logFailure("There are no un-branded sheep to brand");
    }
  };

  /**
   * Handles the breeding of a random pair of unbranded sheep of the opposite sex.
   * @param _ onClick event
   */
  const breedSheep = (_: React.MouseEvent<HTMLButtonElement>) => {
    const unBrandedMaleSheep = filterUnBrandedSheepByGender(sheep, Gender.Male);
    const unBrandedFemaleSheep = filterUnBrandedSheepByGender(
      sheep,
      Gender.Female
    );

    if (unBrandedMaleSheep.length && unBrandedFemaleSheep.length) {
      const randomMaleSheep = selectRandomSheep(unBrandedMaleSheep);

      const randomFemaleSheep = selectRandomSheep(unBrandedFemaleSheep);

      const childSheep = attemptBreed(randomMaleSheep, randomFemaleSheep);

      if (childSheep) {
        setSheep((sh) => [...sh, childSheep]);
        logSuccess(
          `${randomMaleSheep.name} & ${randomFemaleSheep.name} had a baby.`
        );
      } else {
        logFailure(
          `${randomMaleSheep.name} & ${randomFemaleSheep.name} failed to breed. Try again!`
        );
      }
    } else {
      logFailure(
        "There are not enough un-branded sheep of opposing gender to breed"
      );
    }
  };

  return (
    <div className="container">
      <h1>Wren Kitchens Development Task</h1>
      <hr />
      <Field sheep={sheep} />
      <div className="m-5"></div>
      <div className="row">
        <div className="col-6">
          <div className="card p-3">
            <Form onSubmit={handleAddNewSheepSubmit} />
          </div>
        </div>
        <div className="col">
          <div className="card p-3 h-100">
            <Brander onClick={brandRandomSheep} />
          </div>
        </div>
        <div className="col">
          <div className="card p-3 h-100">
            <Breeder onClick={breedSheep} />
          </div>
        </div>
      </div>
      <div className="m-5"></div>
      <EventLog logs={logs} />
    </div>
  );
};

export default App;
