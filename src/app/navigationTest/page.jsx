"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const navigationTest = () => {

  // This is in Client Side Renderring


  const pathname =usePathname();
  console.log("pathname => ", pathname);

  const searchParam = useSearchParams();
  // http://localhost:3000/navigationTest?p=cc&o=oo&v=vv
  searchParam.forEach((v,k)=>{console.log(k,v)})
  searchParam.get("p")//cc


  const router = useRouter();
  const handelBtn = () => {
    router.push("/contact"); // push the path in entities
    // router.replace("/contact"); // replace the path from entities
  };

  return (
    <div>
      <div>navigationTest</div>

      {
        //  Prefetch the page in the background ,disabled by passing prefetch={false}
      }
      <Link href="/" prefetch={false}>
        go home
      </Link>

      <button onClick={handelBtn}>click</button>
    </div>
  );
};

export default navigationTest;
