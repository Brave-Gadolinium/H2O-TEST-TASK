export interface Problem {
  id: number;
  title: string;
  severity: "critical" | "warning"; // Критичная проблема или предупреждение
}
