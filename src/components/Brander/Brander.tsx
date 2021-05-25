import React from "react";

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A component used to brand a random sheep.
 * @param onClick onClick event handler for when button is clicked.
 * @returns The Brander component
 */
const Brander = ({ onClick }: Props) => {
  return (
    <>
      <p>
        Click the button below to randomly brand a currently un-branded sheep in
        your field.
      </p>
      <button type="button" className="btn btn-danger" onClick={onClick}>
        Brand Sheep
      </button>
    </>
  );
};

export default Brander;
