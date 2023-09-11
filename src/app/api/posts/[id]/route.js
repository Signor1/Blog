import { NextResponse } from "next/server";
import connect from "@/utilities/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  //fetch from MongoDB
  try {
    await connect();
    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  //fetch from MongoDB
  try {
    await connect();
    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
