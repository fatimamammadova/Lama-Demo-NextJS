import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Blog Title is required!"],
  },
  text: {
    type: String,
    required: [true, "Blog Text is required!"],
  },
  image: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
