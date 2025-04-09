import React from "react";
import { Problem } from "../types/problem";
import styles from "../styles/ProblemList.module.scss";
import { MdError, MdWarning } from "react-icons/md";

interface ProblemListProps {
  problems: Problem[];
}

const ProblemList: React.FC<ProblemListProps> = ({ problems }) => {
  return (
    <div className={styles.problemList}>
      <h3>Проблемные зоны</h3>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id} className={styles[problem.severity]}>
            {problem.severity === "critical" ? <MdError /> : <MdWarning />}
            {problem.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;
