"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname, useRouter } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  const router = useRouter()

  console.log(router)

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
