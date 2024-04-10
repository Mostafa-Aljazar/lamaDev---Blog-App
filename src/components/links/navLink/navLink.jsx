"use client";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Link from "next/link";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <div
      className={`${styles.conatainer} ${
        pathName === item.path && styles.active
      }`}
    >
      <Link href={item.path}>{item.title}</Link>
    </div>
  );
};

export default NavLink;
