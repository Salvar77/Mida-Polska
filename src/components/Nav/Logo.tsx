import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.scss";

const Logo = () => (
  <div className={styles.wrapper}>
    <Link href="/" aria-label="Strona Główna Mida Polska">
      <Image
        src="/logo-mida.svg"
        alt="Logo Mida Polska"
        width={100}
        height={60}
        priority
      />
    </Link>
  </div>
);

export default Logo;
