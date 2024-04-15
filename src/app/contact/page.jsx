// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
// import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// 3nd solution => craete a specific component to display SSR
// import { HydrationTest_3rd_Solution } from "@/components/HydrationTest/HydrationTest";

// 2nd solution => craete a specific component to display SSR
// const HydrationTest2 = dynamic(
//   () => import("@/components/HydrationTest/HydrationTest"),
//   { ssr: false }
// );

export const metadata = {
  title: "Contact page",
  description: "Contact Description",
};

const ContactPage = () => {
  //// Hydration problem
  const a = Math.random();
  // console.log(a);

  // 1st solution => using useEffect,useState to run in the firt rendering in client side
  // `  const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  // `;

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contact.png"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>

      
        <div style={{ display: "none" }}>
          {`The Solutions :`}
          {`isClient && a`}
          {`<HydrationTest2 />`}
          {`<HydrationTest_3rd_Solution />`}
        </div>


        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button >Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
