import Message from "../../../../models/message";
import { ConnectToDB } from "../../../../utils/database";

export const POST = async (req) => {
  const { userId, name, email, phoneNumber, message } = await req.json();

  try {
    await ConnectToDB();

    const newMessage = new Message({
      creator: userId,
      name,
      email,
      phoneNumber,
      message,
    });

    await newMessage.save();

    console.log("Message is ready");

    return new Response(JSON.stringify(newMessage), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new message", { status: 500 });
  }
};
