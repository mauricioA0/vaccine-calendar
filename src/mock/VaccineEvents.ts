import IPeriod from "../interfaces/Period";
import { IVaccineEvent } from "../interfaces/VaccineEvent";

export const PERIODS: IPeriod[] = [
  {
    title: "BIRTH",
    subtitle: "",
    periodId: 1,
  },
  {
    title: "1",
    subtitle: "MONTH",
    periodId: 2,
  },
  {
    title: "2",
    subtitle: "MONTH",
    periodId: 3,
  },
  {
    title: "4",
    subtitle: "MONTHS",
    periodId: 4,
  },
  {
    title: "6",
    subtitle: "MONTHS",
    periodId: 5,
  },
  {
    title: "12",
    subtitle: "MONTHS",
    periodId: 6,
  },
  {
    title: "15",
    subtitle: "MONTHS",
    periodId: 7,
  },
  {
    title: "18",
    subtitle: "MONTHS",
    periodId: 8,
  },
  {
    title: "19-23",
    subtitle: "MONTHS",
    periodId: 9,
  },
  {
    title: "2-3",
    subtitle: "YEARS",
    periodId: 10,
  },
  {
    title: "4-6",
    subtitle: "YEARS",
    periodId: 11,
  },
];

export const VACCINES_HISTORY: IVaccineEvent[] = [
  {
    name: "HepB",
    stroke: "#fc5741",
    shadowColor: "#fde9e6",
    textColor: "#000000",
    doses: [
      { name: "1st dose", periodId: 1, rangePeriods: 0.1 },
      { name: "2nd dose", periodId: 2, rangePeriods: 1.8 },
      { name: "3rd dose", periodId: 5, rangePeriods: 5.2 },
    ],
  },
  {
    name: "Rotavirus",
    stroke: "#f3c366",
    shadowColor: "#fbe7bd",
    textColor: "#000000",
    doses: [
      { name: "1st dose", periodId: 3, rangePeriods: 0.1 },
      { name: "2nd dose", periodId: 4, rangePeriods: 0.1 },
      { name: "3rd dose", periodId: 5, rangePeriods: 0.1 },
    ],
  },
  {
    name: "DTaP",
    stroke: "#b63057",
    shadowColor: "#e9beca",
    textColor: "#ffffff",
    doses: [
      { name: "1st dose", periodId: 3, rangePeriods: 0.1 },
      { name: "2nd dose", periodId: 4, rangePeriods: 0.1 },
      { name: "3rd dose", periodId: 5, rangePeriods: 0.1 },
      { name: "4rd dose", periodId: 7, rangePeriods: 1.8 },
      { name: "5rd dose", periodId: 11, rangePeriods: 0.1 },
    ],
  },
  {
    name: "Hib",
    stroke: "#add942",
    shadowColor: "#e8f5c7",
    textColor: "#000000",
    doses: [
      { name: "1st dose", periodId: 3, rangePeriods: 0.1 },
      { name: "2nd dose", periodId: 4, rangePeriods: 0.1 },
      { name: "3rd dose", periodId: 5, rangePeriods: 0.1 },
      { name: "3rd or 4rd dose", periodId: 6, rangePeriods: 1.3 },
    ],
  },
  {
    name: "Pneumococcal",
    stroke: "#35b5c8",
    shadowColor: "#bde9ef",
    textColor: "#000000",
    doses: [
      { name: "1st dose", periodId: 3, rangePeriods: 0.1 },
      { name: "2nd dose", periodId: 4, rangePeriods: 0.1 },
      { name: "3rd dose", periodId: 5, rangePeriods: 0.1 },
      { name: "4rd dose", periodId: 6, rangePeriods: 1.8 },
    ],
  },
  {
    name: "Polio",
    stroke: "#4253de",
    shadowColor: "#c4cbf5",
    textColor: "#ffffff",
    doses: [
      { name: "1st dose", periodId: 3, rangePeriods: 0.1 },
      { name: "2nd dose", periodId: 4, rangePeriods: 0.1 },
      { name: "3rd dose", periodId: 5, rangePeriods: 5.2 },
      { name: "4rd dose", periodId: 11, rangePeriods: 0.1 },
    ],
  },
  {
    name: "Influenza (flu)**",
    stroke: "#484e62",
    shadowColor: "#c8cace",
    textColor: "#ffffff",
    doses: [{ name: "Yearly 1 or 2 doses", periodId: 5, rangePeriods: 9.4 }],
  },
  {
    name: "MMR",
    stroke: "#2b9a44",
    shadowColor: "#aadcb8",
    textColor: "#ffffff",
    doses: [
      { name: "1st dose", periodId: 6, rangePeriods: 1.8 },
      { name: "2nd dose", periodId: 11, rangePeriods: 0.1 },
    ],
  },
  {
    name: "Varicella (Chickendpox)",
    stroke: "#45387b",
    shadowColor: "#c5c1d7",
    textColor: "#ffffff",
    doses: [
      { name: "1st dose", periodId: 6, rangePeriods: 1.8 },
      { name: "2nd dose", periodId: 11, rangePeriods: 0.1 },
    ],
  },
  {
    name: "HepA***",
    stroke: "#f277a5",
    shadowColor: "#fad9e4",
    textColor: "#000000",
    doses: [
      { name: "1st dose", periodId: 6, rangePeriods: 1.8 },
      { name: "2nd dose", periodId: 8, rangePeriods: 1.8 },
    ],
  },
];
