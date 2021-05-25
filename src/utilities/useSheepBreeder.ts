import { v4 as uuid } from "uuid";
import { Sheep, Gender } from "../types";

/**
 * A custom hook for filtering and breeding sheep.
 * @returns attemptBreed, selectRandomSheep & filterUnBrandedSheepByGender functions.
 */
export const useSheepBreeder = () => {
  /**
   * Attempts to breed sheep.
   * @param maleSheep The male sheep.
   * @param femaleSheep The female sheep.
   * @returns A new sheep or null.
   */
  const attemptBreed = (maleSheep: Sheep, femaleSheep: Sheep): Sheep | null => {
    if (maleSheep.gender !== Gender.Male) {
      throw new Error(
        "A sheep of female gender was passed as the maleSheep function argument."
      );
    }

    if (femaleSheep.gender !== Gender.Female) {
      throw new Error(
        "A sheep of male gender was passed as the femaleSheep function argument."
      );
    }

    const breedSuccess: boolean = Math.random() < 0.5;

    const childGender: Gender =
      Math.random() < 0.5 ? Gender.Male : Gender.Female;

    return breedSuccess
      ? { id: uuid(), name: "Child", gender: childGender, branded: false }
      : null;
  };

  /**
   * Selects a random sheep from the provided collection.
   * @param sheep The collection of sheep
   * @returns A randomly selected sheep
   */
  const selectRandomSheep = (sheep: Sheep[]) => {
    return sheep[Math.floor(Math.random() * sheep.length)];
  };

  /**
   * Filters a collection of sheep by the specified gender.
   * @param sheep The collection of sheep.
   * @param gender The gender of sheep to filter.
   * @returns A collection of sheep filtered by the specified gender.
   */
  const filterUnBrandedSheepByGender = (sheep: Sheep[], gender: Gender) => {
    return sheep.filter((sh) => sh.branded === false && sh.gender === gender);
  };

  return {
    attemptBreed,
    selectRandomSheep,
    filterUnBrandedSheepByGender,
  };
};
