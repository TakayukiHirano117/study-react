import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;
