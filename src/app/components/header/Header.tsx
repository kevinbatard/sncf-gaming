import Image from "next/image";
import logosncf from "../../../../public/SNCFGAMING.png";
import Link from "next/link";
import styles from "../../style/header.module.css";

export default function Header() {
  return (
    <>
      <div
        className={`${styles.backgroundHeader} d-flex align-items-center p-2`}
      >
        <Image src={logosncf} alt="logo sncf gaming" width={125} />
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
        <div className="ms-auto p-4">O</div>
      </div>
      <div className={`${styles.backgroudBarre} w-full mb-4`}></div>
    </>
  );
}
