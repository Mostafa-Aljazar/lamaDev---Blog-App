import React from "react";
import Links from "../links/Links";
import styles from "./navbar.module.css"
import Link from 'next/link';
import { auth } from "@/lib/auth";
const Navbar = async() => {
// pass session as a prop ,because it is a server action , and Link is a client componant (contains useEffect)
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Lama dev</Link>

      <div>
      <Links sessionAuth={session}/>
      </div>
      
    </div>
  );
};

export default Navbar;
