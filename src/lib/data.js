import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
const users = [
  { id: 1, username: "John" },
  { id: 2, username: "Jane" },
];

const posts = [
  { id: 1, title: "Post 1", body: "body Post 1......", userId: 1 },
  { id: 2, title: "Post 2", body: "body Post 2......", userId: 1 },
  { id: 3, title: "Post 3", body: "body Post 3......", userId: 2 },
  { id: 4, title: "Post 4", body: "body Post 4......", userId: 2 },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  const post = posts.find((post) => post.id == parseInt(id));
  return post;
};

export const getUser = async (id) => {
  return users.find((user) => user.id == parseInt(id));
};


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
`
// very important note:=> you should make api routes before Fetching Data without Using an AP,
//  (to connect successfully and build the DB & collections in mongo atlas , after that , you can delete api route , will not effect) 
`

// Fetch Data without Using an AP

export const getPosts2 = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw   new Error("Failed to fetch posts!");
  }
};

export const getPost2 = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug : slug});
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser2 = async (id) => {
  // Stop Caching Data
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};