import React from "react";
import styles from "../styles/Header.module.scss";
import avatar from "../assets/avatar.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>H₂O</div>
      <nav>
        <ul>
          <li>Сводные данные по сотрудникам</li>
          <li>Сводный отчёт внутри компании</li>
          <li>Сводный отчёт по сделкам</li>
        </ul>
      </nav>
      <div className={styles.user}>
        <img src={avatar} alt="Avatar" />
        <span>Антон</span>
        <span>менеджер продаж</span>
      </div>
    </header>
  );
};

export default Header;
