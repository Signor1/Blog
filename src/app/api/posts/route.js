import { NextResponse } from "next/server";
import connect from "@/utilities/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  //fetch from MongoDB
  try {
    await connect();
    const post = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);
  //fetch from MongoDB
  try {
    await connect();
    await newPost.save();

    return new NextResponse("New Post has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
