import React, { useState } from "react";

import { Gender } from "../../types";

interface Props {
  onSubmit: (e: React.FormEvent, name: string, gender: string) => void;
}

/**
 * A component to render a form for adding new sheep to the field.
 * @param onSubmit The onSubmit callback
 * @returns The Form component.
 */
const Form = ({ onSubmit }: Props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<Gender>(Gender.Male);

  const handleSubmit = (e: React.FormEvent) => {
    onSubmit(e, name, gender);
    setName("");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value as Gender);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          className="form-control"
          id="Name"
          placeholder="Enter the name of the sheep..."
          autoComplete="off"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="form-group">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="Gender"
            id="male"
            value={Gender.Male}
            checked={gender === Gender.Male}
            onChange={handleRadioChange}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="Gender"
            id="female"
            value={Gender.Female}
            checked={gender === Gender.Female}
            onChange={handleRadioChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Sheep
      </button>
    </form>
  );
};

export default Form;
