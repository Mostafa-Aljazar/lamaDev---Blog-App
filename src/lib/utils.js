import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    console.log(`Mongo db connected: ${db.connection.host}`);

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
};

// export const connectToDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to MongoDB.");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectToDb;
