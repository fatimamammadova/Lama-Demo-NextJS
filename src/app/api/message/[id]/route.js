import Message from "../../../../models/message";
import { ConnectToDB } from "../../../../utils/database";

//GET (read)
export const GET = async (request, { params }) => {
  try {
    await ConnectToDB();
    const message = await Message.findById(params.id).populate("creator");

    if (!message) return new Response("Message not found", { status: 404 });

    return new Response(JSON.stringify(message), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all messages", { status: 500 });
  }
};

//PATCH (update)
export const PATCH = async (request, { params }) => {
  const { phoneNumber, message } = await request.json();

  try {
    await ConnectToDB();

    const existingMessage = await Message.findById(params.id);

    if (!existingMessage) {
      return new Response("Message not found", { status: 404 });
    }

    existingMessage.phoneNumber = phoneNumber;
    existingMessage.message = message;

    await existingMessage.save();

    return new Response(JSON.stringify(existingMessage), { status: 200 });
  } catch (error) {
    return new Response("Failed to update message", { status: 500 });
  }
};

//DELETE (delete)
export const DELETE = async (request, { params }) => {
  try {
    await ConnectToDB();

    await Message.findByIdAndDelete(params.id);

    return new Response("Message deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to update message", { status: 500 });
  }
};
