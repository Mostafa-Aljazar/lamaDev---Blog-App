"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

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
// 0567053050

export const register = async (formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    // To Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      // password,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};