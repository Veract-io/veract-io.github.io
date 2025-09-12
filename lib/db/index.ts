import mongoose from "mongoose";
let cached = (global as any).mongoose || { conn: null, promise: null };
export async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise)
    /** console after success */
    console.log("Connecting to MongoDB...");
    /** local mongodb */
    // cached.promise = mongoose.connect(process.env.MONGODB_URI!, {
    //   dbName: process.env.MONGODB_DB || "emails",
    // }).then(m => m);
    cached.promise = mongoose.connect("mongodb://localhost:27017/emails").then(m => {
      console.log("Connected to MongoDB");
      return m;
    });
  cached.conn = await cached.promise; return cached.conn;
}
