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

  useEffect(() => {
    const randomData = generateRandomData(12);
    setData(randomData);
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.app}>
        <aside className={styles.sidebar}>...</aside>
        <Header />
        <div className={styles.summary}>
          <SummaryReport
            title="Итоги"
            value={10157764}
            change={21.5}
            color="#4CAF50"
          />
          <SummaryReport
            title="B2B"
            value={8615253}
            change={43.7}
            color="#2196F3"
          />
          <SummaryReport
            title="B2C"
            value={-1542511}
            change={-13.7}
            color="#FF5722"
          />
        </div>
        <div className={styles.content}>
          <Sidebar />
          <main>
            <h2>График операций</h2>
            <Chart data={data} />
            <ProblemList problems={problemData} />
          </main>
        </div>
      </div>
    </motion.h1>
  );
};

export default App;
