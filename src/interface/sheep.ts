export interface SheepType {
  id: number;
  name: string;
  gender: 'Tup' | 'Ewe';
  branded?: boolean;
  key?: number;
  sheepSelectedNumber?: null | 1 | 2;
  selectSheep?: (sheepId: number) => void;
}