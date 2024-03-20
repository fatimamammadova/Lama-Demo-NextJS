"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState();
  const isUserLoggedIn = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {isUserLoggedIn ? (
          <>
            <button type="button" className={styles.signout}>
              Sign Out
            </button>
            <Link href="/profile" className={styles.profile}>
              <Image src="/noavatar.png" width={40} height={40} />
            </Link>
          </>
        ) : (
          <NavLink item={{ title: "Sign In", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
        width={30}
        height={30}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {isUserLoggedIn ? (
            <>
              <Link href="/profile" className={styles.profile}>
                <Image src="/noavatar.png" width={60} height={60} />
              </Link>
              <button type="button" className={styles.signout}>
                Sign Out
              </button>
            </>
          ) : (
            <NavLink item={{ title: "SignIn", path: "/login" }} />
          )}
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
