import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

// export async function POST(request) {
//   const { title, desc, userId, slug } = await request.json();
//   await connectToDb();
//   await Post.create({ title, desc, userId, slug });
//   return NextResponse.json({ message: "Post Created" }, { status: 201 });
// }

// export async function GET() {
//   await connectToDb();
//   const posts = await Post.find();
//   return NextResponse.json({ posts });
// }

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectToDb();
//   await Post.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }

export async function GET(request) {
  try {
    await connectToDb();
    const posts = await Post.find();
    return NextResponse.json({ posts });
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch post!")
  }
}
