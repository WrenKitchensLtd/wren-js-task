import React from "react";

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A component used to breed sheep within the field.
 * @param onClick onClick event handler for when the button is clicked.
 * @returns The Breeder component.
 */
const Breeder = ({ onClick }: Props) => {
  return (
    <>
      <p>
        Click the button below to attempt to breed a pair of unbranded sheep in
        your field.
      </p>
      <button type="button" className="btn btn-success" onClick={onClick}>
        Breed Sheep
      </button>
    </>
  );
};

export default Breeder;
