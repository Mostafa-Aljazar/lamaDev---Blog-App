import { getUser, getUser2 } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

// const getUserFack = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   if (!res.ok) {
//     throw new Error("error in fetch data...");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // FETCH Fack DATA WITH IN API
  // const user = await getUserFack(userId);

  // FETCH Fack DATA WITH out AN API
  // const user = await getUser(userId);

  // FETCH DATA WITH OUT API using server actions
  const user = await getUser2(userId);
  // console.log(user)
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
        <span className={styles.username}>{user.email}</span>
      </div>
    </div>
  );
};

export default PostUser;
