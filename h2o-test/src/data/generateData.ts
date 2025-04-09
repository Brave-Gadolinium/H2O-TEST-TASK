import { faker } from "@faker-js/faker";
import { Problem } from "../types/problem";
export interface Transaction {
  division: string;
  date: string;
  amount: number;
  type: "expanses" | "income" | "revenue" | "debt";
}

export const problemData: Problem[] = [
  { id: 1, title: "Линейный персонал", severity: "critical" },
  { id: 2, title: "Закупка спецодежды", severity: "warning" },
  { id: 3, title: "Недостаток оборудования", severity: "critical" },
];

export function generateRandomData(count: number): Transaction[] {
  const types: ("expanses" | "income" | "revenue" | "debt")[] = [
    "expanses",
    "income",
    "revenue",
    "debt",
  ];
  const divisions = ["B2B", "B2C"];

  return Array.from({ length: count }, () => ({
    division: faker.helpers.arrayElement(divisions),
    date: faker.date.recent().toISOString().split("T")[0],
    amount: Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000,
    type: faker.helpers.arrayElement(types),
  }));
}
