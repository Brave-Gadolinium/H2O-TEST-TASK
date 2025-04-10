import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";
import { generateRandomData, Transaction } from "./data/generateData";
import styles from "./styles/App.module.scss";
import { motion } from "framer-motion";
import SummaryReport from "./components/SummaryReport";
import { problemData } from "./data/problemData.ts";
import ProblemList from "./components/ProblemList";

const App: React.FC = () => {
  const [data, setData] = useState<Transaction[]>([]);
  const calculateSummary = (data: Transaction[]) => {
    const totals = {
      income: 0,
      expanses: 0,
      revenue: 0,
      debt: 0,
    };

    data.forEach((item) => {
      if (item.type === "income") totals.income += item.amount;
      if (item.type === "expanses") totals.expanses += item.amount;
      if (item.type === "revenue") totals.revenue += item.amount;
      if (item.type === "debt") totals.debt += item.amount;
    });

    return totals;
  };
  const summaryTotals = calculateSummary(data);
  useEffect(() => {
    const randomData = generateRandomData(12);
    console.log(randomData);
    setData(randomData);
  }, []);

  const transformedData = data.map((item) => ({
    ...item,
    month: item.month || "Unknown", // Добавьте значение по умолчанию, если `month` отсутствует
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.app}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <main className={styles.content}>
          <Header />
          <div className={styles.summary}>
            <SummaryReport
              title="Итоги"
              value={summaryTotals.revenue}
              change={21.5}
              color="#ADEFD1"
            />
            <SummaryReport
              title="B2B"
              value={summaryTotals.income}
              change={43.7}
              color="#B3E5FC"
            />
            <SummaryReport
              title="B2C"
              value={-summaryTotals.expanses}
              change={-13.7}
              color="#FFCCBC"
            />
          </div>
          <h2>График операций</h2>
          <Chart data={transformedData} />
          <ProblemList problems={problemData} />
        </main>
      </div>
    </motion.div>
  );
};

export default App;
