import Link from "next/link";
import React from "react";

const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Admin", path: "/admin" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
