import styles from "../styles/SummaryReport.module.scss";

interface SummaryReportProps {
  title: string;
  value: number;
  change: number;
  color: string;
}

const SummaryReport: React.FC<SummaryReportProps> = ({
  title,
  value,
  change,
  color,
}) => {
  const formattedValue = value.toLocaleString("ru-RU"); // Форматирование чисел
  const arrow = change > 0 ? "↑" : "↓";

  return (
    <div className={styles.report} style={{ background: color }}>
      <div className={styles.arrow}>
        {arrow} {Math.abs(change)}%
      </div>
      <h3>{formattedValue} ₽</h3>
      <p>{title}</p>
    </div>
  );
};
export default SummaryReport;
