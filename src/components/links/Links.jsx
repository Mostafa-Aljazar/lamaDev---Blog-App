"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from 'next/image';

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.path} />
        ))}
        {session ? (
          <React.Fragment>
            {isAdmin && <NavLink item={{ title: "admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </React.Fragment>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
    

      <Image  src="/menu.png"
      width={30}
      height={30}
       className={styles.menuButton}
      onClick={() => setOpen((pre) => !pre)}/>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.path} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
