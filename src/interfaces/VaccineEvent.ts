import { IDose } from "./Dose";

export interface IVaccineEvent {
  name: string;
  stroke: string;
  shadowColor: string;
  textColor: string;
  doses: IDose[];
}
