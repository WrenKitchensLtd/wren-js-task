export interface Sheep {
  id: string;
  name: string;
  gender: Gender;
  branded: boolean;
}

export interface Log {
  id: string;
  outcome: Outcome;
  message: string;
}

export enum Outcome {
  Success = "Success",
  Failure = "Failure",
}

export enum Gender {
  Male = "Male",
  Female = "Female",
}
