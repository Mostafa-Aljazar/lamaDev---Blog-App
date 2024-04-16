"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";


// Server Actions (add post , delete post , add user , delete user) 
// without using api routes

export async function addPost(formData) {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await newPost.save();
    console.log("create new post .");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(err);
    return { error: "Something went wrong!" };
  }

  return console.log("Hello world :=>", title, desc, slug, userId);
}

export async function deletePost(formData) {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = await Post.findByIdAndDelete(id);
    // await newPost.save();
    console.log("delete Post  .");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }

  return console.log("Hello world :=>", id);
}

export async function addUser(formData) {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("create new User .");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }

  return console.log("User info :=>", username, email, password, img);
}

export async function deleteUser(formData) {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await User.findByIdAndDelete(id);
    console.log("delete User  .");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }

  return console.log("Hello world :=>", id);
}



export const handelGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handelLogout = async () => {
  "use server";
  await signOut();
};
