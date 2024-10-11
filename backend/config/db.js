import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://itsmohammedalfakir:7cYwnzsLGnpoiZwl@cluster0.3amwk.mongodb.net/filmora_db?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected: " + conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MONGODB: " + error.message);
    process.exit(1); // 1 means there was an error, 0 means success
  }
};
