import React from "react";
import clsx from "clsx";
import "./sheep.css";
import { Sheep } from "../../types";

/**
 * A component used to render a Sheep.
 * @param sheep The Sheep to render
 * @returns The Sheep component.
 */
const SheepComponent = ({ name, gender, branded = false }: Sheep) => {
  return (
    <div className={clsx("sheep", "m-2", branded && "branded")}>
      <p>
        {name} : {gender}
        {branded}
      </p>
    </div>
  );
};

export default SheepComponent;
