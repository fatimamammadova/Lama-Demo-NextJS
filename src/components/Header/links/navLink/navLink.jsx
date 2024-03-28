"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  const isActive = pathName === "/blog";
  
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        isActive && styles.active 
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
