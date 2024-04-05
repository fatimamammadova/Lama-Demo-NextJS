import Message from "../../../models/message";
import { ConnectToDB } from "../../../utils/database";

export const GET = async (request) => {
  try {
    await ConnectToDB();

    const message = await Message.find().populate("creator");

    return new Response(JSON.stringify(message), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all blogs", { status: 505 });
  }
};
