import { addPost, addUser, deletePost, deleteUser } from "@/lib/action";
import React from "react";

const page = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <input type="text" placeholder="img" name="img" />
        <button>Create Post</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="id" name="id" />
        <button>Delete Post</button>
      </form>

      <form action={addUser}>
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="email" name="email" />
      <input type="text" placeholder="password" name="password" />
      <input type="text" placeholder="img" name="img" />
      <button>Create User</button>
    </form>
    
    <form action={deleteUser}>
    <input type="text" placeholder="id" name="id" />
    <button>Delete User</button>
  </form>

    </div>
  );
};

export default page;
