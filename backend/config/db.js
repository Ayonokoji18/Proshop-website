import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connection is connect");
    process.exit();
  } catch (err) {
    console.log(`Some Problem occured ,Mongo connection failed ${err}`);
    process.exit(1);
  }
}

export default connectDB;
