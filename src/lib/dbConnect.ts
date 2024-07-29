import mongoose from "mongoose";

type connectionObject = {
  isConnect?: number;
};

const connection: connectionObject = {};

async function dbConnect() {
  if (connection.isConnect) {
    console.log("Database Already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    console.log(db);
      connection.isConnect = db.connections[0].readyState;
    
      console.log("Db connected successfully")
  } catch (error) {
      console.log("Database connection failed ", error);
      process.exit()
  }
}


export default dbConnect