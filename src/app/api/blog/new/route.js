import Blog from "@/models/blog";
import { ConnectToDB } from "@/utils/database";

export const POST = async (req) => {
  const { userId, title, text, image, date } = await req.json();

  try {
    await ConnectToDB();

    const newBlog = new Blog({
      creator: userId,
      title,
      text,
      image,
      date,
    });

    await newBlog.save();

    console.log("Blog created");

    return new Response(JSON.stringify(newBlog), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new blog", { status: 500 });
  }
};
