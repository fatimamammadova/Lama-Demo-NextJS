import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Username is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is required."],
  },
  message: {
    type: String,
    required: [true, "Message is required."],
  },
});

const Message = models.Message || model("Message", MessageSchema);

export default Message;
