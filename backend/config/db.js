import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb is Connected ${conn.connection.host}`);
    console.log(`Mongo Uri ${process.env.MONGO_URI}`);
  } catch (error) {
    console.log(`Error, ${error.message}`);
    process.exit(1);
  }
}
export default connectDB;
