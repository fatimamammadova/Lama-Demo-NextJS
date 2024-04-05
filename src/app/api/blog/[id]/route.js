import Blog from "../../../../models/blog";
import { ConnectToDB } from "../../../../utils/database";

//GET
export const GET = async (request, { params }) => {
  try {
    await ConnectToDB();

    const blog = await Blog.findById(params.id).populate("creator");

    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the blog", { status: 500 });
  }
};

//UPDATE
export const PATCH = async (request, { params }) => {
  const { title, text, image, date } = await request.json();

  try {
    await ConnectToDB();

    const existingBlog = await Blog.findById(params.id);

    if (!existingBlog) {
      return new Response("Blog not found", { status: 404 });
    }

    existingBlog.title = title;
    existingBlog.text = text;
    existingBlog.image = image;
    existingBlog.date = date;

    await existingBlog.save();

    return new Response(JSON.stringify(existingBlog), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the blog", { status: 500 });
  }
};

//DELETE
export const DELETE = async (request, { params }) => {
  try {
    await ConnectToDB();

    await Blog.findByIdAndDelete(params.id);

    return new Response("Blog deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the blog", { status: 500 });
  }
};
