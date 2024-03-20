import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Through Agency.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ipsum consectetur soluta nihil ipsam tempora itaque ab inventore.
        </p>

        <div className={styles.buttons}>
          <Link className={styles.button} href="/about">Learn More</Link>
          <Link className={styles.button} href="/contact">Contact</Link>
        </div>

        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="Brands Image"
            className={styles.brandImg}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt="HomePage Image"
          className={styles.heroImg}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Home;
