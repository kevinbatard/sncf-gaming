import Image from "next/image";
import logosncf from "../../../../public/SNCFGAMING.png";
import styles from "../../style/header.module.css";
import Navbar from "./Navbar";
import Login from "./Login";

export default function Header() {
  return (
    <>
      <div
        className={`${styles.backgroundHeader} d-flex align-items-center p-2`}
      >
        <Image src={logosncf} alt="logo sncf gaming" width={125} />
        <Navbar />
        <Login />
      </div>
      <div className={`${styles.backgroudBarre} w-full mb-4`}></div>
    </>
  );
}
