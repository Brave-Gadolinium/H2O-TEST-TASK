import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

interface Transaction {
  date: string;
  amount: number;
  type: string;
}

interface ChartProps {
  data: Transaction[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis
        dataKey="date"
        tickFormatter={(date) => new Date(date).toLocaleDateString()}
        label={{ value: "Дата", position: "insideBottom", offset: -10 }}
      />
      <YAxis
        tickFormatter={(value) => value.toLocaleString("ru-RU")}
        label={{ value: "Сумма (₽)", angle: -90, position: "insideLeft" }}
      />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    </LineChart>
  );
};

export default Chart;
