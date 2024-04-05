import Message from "../../../../../models/message";
import { ConnectToDB } from "../../../../../utils/database";

export const GET = async (request, { params }) => {
  try {
    await ConnectToDB();

    const message = await Message.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(message), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all messages", { status: 500 });
  }
};