import { faker } from "@faker-js/faker";
import { Problem } from "../types/problem";

export interface Transaction {
  division: string;
  date: string;
  amount: number;
  type: "expanses" | "income" | "revenue" | "debt";
  month: string;
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
  const months = [
    "Янв",
    "Фев",
    "Март",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
    "Сент",
    "Окт",
    "Нояб",
    "Дек",
  ];

  return Array.from({ length: count }, (_, index) => {
    const randomDate = faker.date.recent();
    const year = randomDate.getFullYear();
    const month = months[index % months.length]; // Используем последовательные месяцы

    return {
      division: faker.helpers.arrayElement(divisions),
      date: `${year}-${String(index + 1).padStart(2, "0")}-01`, // Формат: YYYY-MM-01
      amount: Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000,
      type: faker.helpers.arrayElement(types),
      month: month, // Текстовый месяц
    };
  });
}
