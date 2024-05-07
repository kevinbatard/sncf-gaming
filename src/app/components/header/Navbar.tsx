"use client";

import Link from "next/link";
import styles from "../../style/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="d-flex list-unstyled">
          <li className={`p-4`}>
            <Link className={`${styles.fontMenu}`} href="/">
              Accueil
            </Link>
          </li>
          <li className={`p-4`}>
            <Link className={`${styles.fontMenu}`} href="/programmation">
              Programmation
            </Link>
          </li>
          <li className={`p-4`}>
            <Link className={`${styles.fontMenu}`} href="/streamers">
              Team
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
