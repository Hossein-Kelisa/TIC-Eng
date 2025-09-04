import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/userModel.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (adminExists) {
      console.log("Admin already exists");
      return process.exit();
    }

    const admin = new User({
      userName: "Admin-Tic",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD, 
      role: "admin",
    });

    await admin.save();
    console.log("Admin user created successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
