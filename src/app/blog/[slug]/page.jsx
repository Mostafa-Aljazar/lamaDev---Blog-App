import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost, getPost2 } from "@/lib/data";

// const getPostFack = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     // throw new Error("error in fetch data...");
//   }
//   return res.json();
// };


const getPostApi = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("error in fetch data...");
  }
  return res.json();
};

export async function generateMetadata({ params }) {
  // console.log(params.slug)
  const post = await getPost2(params.slug);
  // console.log(post)

  return {
    title: post.title,
    description: post.desc,
  }
}



const SinglePostBage = async ({ params, searchParams }) => {
  // searchParams in SSR ,but useSearchParams() in CSR
  // console.log(searchParams);
  // console.log(params.slug);

  const { slug } = params;
  
  // FETCH Fack DATA WITH IN API
  // const posts = await getPostFack();

  // FETCH Fack DATA WITH out AN API
  // const post = await getPost(slug);

  // FETCH DATA WITH OUT API using server actions
  // const post = await getPost2(slug);
  // console.log(post)

  const post = await getPostApi(params.slug);
  // console.log("PostApi :",PostApi)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.img ? post.img : "/post.png"}
          alt=""
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>post.createdAt</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostBage;
