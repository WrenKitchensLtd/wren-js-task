import React from "react";

import "./field.css";

import { SheepComponent } from "../index";
import { Sheep } from "../../types";

interface Props {
  sheep: Sheep[];
}

/**
 * A component that renders a Field, parent of the Sheep component.
 * @param sheep The collection of sheep
 * @returns The Field component.
 */
const Field = ({ sheep }: Props) => {
  return (
    <div className="card field d-flex flex-row flex-wrap align-items-start overflow-auto">
      {sheep.length ? (
        sheep.map((sh) => <SheepComponent key={sh.id} {...sh} />)
      ) : (
        <div className="flex-column m-2">
          <h2>Your field is empty!</h2>
          <p>Add a sheep to your field using the form below.</p>
        </div>
      )}
    </div>
  );
};

export default Field;
