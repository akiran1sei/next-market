import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://akiran1sei:akiran1sei@cluster0.dn9de7r.mongodb.net/item?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
