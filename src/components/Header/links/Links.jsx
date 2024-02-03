'use client'

import Link from "next/link"
import Image from "next/image"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import { useState } from "react"

const links = [
    {
        title: "Homepage",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    }
]

const Links = () => {
    
    const [open,setOpen] =useState()

    const session = true
    const isAdmin = true

    return (

        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title}/>
                )))}

                {
                    session ? 
                    (
                        <>
                            {isAdmin && (<NavLink item={{title: "Admin", path: "/admin"}}/>)}  
                            <button type="button" className={styles.logout}>Logout</button>
                        </>
                    ) 
                    :
                    (
                        <NavLink item={{title: 'Login',path:"/login"}}/>
                    )
                }

            </div>
            <Image src="/menu.png" className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} width={30} height={30}/>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title}/>
                    ))}
                    {
                    session ? 
                    (
                        <>
                            {isAdmin && (<NavLink item={{title: "Admin", path: "/admin"}}/>)}  
                            <button type="button" className={styles.logout}>Logout</button>
                        </>
                    ) 
                    :
                    (
                        <NavLink item={{title: 'Login',path:"/login"}}/>
                    )
                }
                </div>
            )}
        </div>
    )
}

export default Links