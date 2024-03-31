"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

import { signOut, useSession, signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const pathName = usePathname();
  // useEffect(() => {
  //   const blogLink = document.querySelector(".Blog");
  //   if (pathName.startsWith("/blog")) {
  //     blogLink.classList.add("navLink_active__xSnAx");
  //   } else {
  //     blogLink.classList.remove("navLink_active__xSnAx");
  //   }
  // }, [pathName]);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {session?.user ? (
          <>
            <button type="button" className={styles.signout} onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile" className={styles.profile}>
              <Image
                src={session?.user.image}
                width={40}
                height={40}
                alt={session?.user.name || "User Image"}
                priority="true"
              />
            </Link>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className={styles.signin}
                >
                  Sign In
                </button>
              ))}
          </>
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
          {session?.user ? (
            <>
              <Link href="/profile" className={styles.profile}>
                <Image
                  src={session?.user.image}
                  width={60}
                  height={60}
                  alt="User Image"
                />
              </Link>
              <button
                type="button"
                className={styles.signout}
                onClick={signOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className={styles.signin}
                  >
                    Sign In
                  </button>
                ))}
            </>
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
