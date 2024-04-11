// "use client";
import PostCard from "@/components/postCard/postCard";
import React from "react";
import styles from "./blog.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
    next: {
      revalidate: 3600,
    },
  });
  if (!res.ok) {
    throw new Error("error in fetch data...");
  }
  return res.json();
};

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  const Posts = await getData();
  // console.log(posts);
  return (
    <div className={styles.container}>
      {Posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
