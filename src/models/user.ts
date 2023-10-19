import mongoose from "mongoose";

const mongoURL = process.env.mongoURL!;

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected!")
  }).catch((error) => {
    console.log(error)
  });

const UserSubscriptionSchema = new mongoose.Schema({
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
    },
    chat_id: {
      type: Number,
      required: [true, "chat_id is required"],
      unique: true
    },
    location: {
        type: Array
    }
    
  },)

export default mongoose.models.UserSubscription || mongoose.model("UserSubscription", UserSubscriptionSchema)
