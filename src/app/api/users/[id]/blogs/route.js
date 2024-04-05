import Blog from "../../../../../models/blog";
import { ConnectToDB } from "../../../../../utils/database";

export const GET = async (request, { params }) => {
  try {
    await ConnectToDB();

    const blogs = await Blog.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all blogs", { status: 500 });
  }
};
