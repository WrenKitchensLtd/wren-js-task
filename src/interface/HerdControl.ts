import { SheepType } from "./index";

export interface HerdControlType {
  selectedSheep1?: SheepType;
  selectedSheep2?: SheepType;
  addSheep: (name: string, gender: "Tup" | "Ewe") => void;
  brandRandomSheep: () => void;
  breedRandomSheep: () => void;
}