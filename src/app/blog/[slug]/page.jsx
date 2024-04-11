import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";

const SinglePostBage = ({ params , searchParams}) => {
  // searchParams in SSR ,but useSearchParams() in CSR
  console.log(searchParams);
  
  console.log(params.slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.png" alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>post.title</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>post.createdAt</span>
          </div>
        </div>
        <div className={styles.content}>post.desc</div>
      </div>
    </div>
  );
};

export default SinglePostBage;
