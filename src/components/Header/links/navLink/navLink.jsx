"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  useEffect(() => {
    const blogLink = document.querySelector(".Blog");
    blogLink.classList.add("navLink_active__xSnAx");
    console.log(pathName)
  }, [pathName]);

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${item.title} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
