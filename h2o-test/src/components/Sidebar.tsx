import React from "react";
import { BsHouse, BsTable } from "react-icons/bs";
import styles from "../styles/Sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <BsHouse /> Главная
          </li>
          <li>
            <BsTable /> Отчёты
          </li>
          {/* ... */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
