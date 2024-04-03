import User from "@/models/user";
import { ConnectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await ConnectToDB();

    const user = await User.findById(params.id);

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch user", { status: 500 });
  }
};
