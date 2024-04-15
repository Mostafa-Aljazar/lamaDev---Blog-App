import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts, getPosts2 } from "@/lib/data";

export const metadata = {
  title: "Blog page",
  description: "Blog Description",
};
// const getPostsFack = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   if (!res.ok) {
//     // throw new Error("error in fetch data...");
//   }
//   return res.json();
// };

const BlogPage = async () => {
  // FETCH Fack DATA WITH IN API
  // const posts = await getPostsFack();

  // FETCH Fack DATA WITHOUT AN API
  // const posts = await getPosts();

  // FETCH DATA WITHOUT AN API using server actions
  const posts = await getPosts2();
  // console.log(`postsServer : ${posts}`)
  return (
    <div className={styles.container}>
      {posts &&
        posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
    </div>
  );
};

export default BlogPage;
