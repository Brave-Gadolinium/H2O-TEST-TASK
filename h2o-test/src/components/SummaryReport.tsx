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
  return (
    <div className={styles.report}>
      <div className={styles.arrow}>
        {change > 0 ? "↑" : "↓"} {Math.abs(change)}%
      </div>
      <h3>{value.toLocaleString("ru-RU")} ₽</h3>
      <p>{title}</p>
    </div>
  );
};
export default SummaryReport;
