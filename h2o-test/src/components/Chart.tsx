import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

interface Transaction {
  date: string;
  amount: number;
  type: string;
  month: string;
}

interface ChartProps {
  data: Transaction[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.map((item) => ({
    month: item.month,
    income: item.type === "income" ? item.amount : 0,
    expanses: item.type === "expanses" ? item.amount : 0,
    revenue: item.type === "revenue" ? item.amount : 0,
  }));

  return (
    <LineChart
      width={800}
      height={400}
      data={chartData}
      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />

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
      <Line type="monotone" dataKey="income" stroke="#ADEFD1" strokeWidth={3} />
      <Line
        type="monotone"
        dataKey="expanses"
        stroke="#FFCCBC"
        strokeWidth={3}
      />
      <Line
        type="monotone"
        dataKey="revenue"
        stroke="#B3E5FC"
        strokeWidth={3}
      />
    </LineChart>
  );
};

export default Chart;
