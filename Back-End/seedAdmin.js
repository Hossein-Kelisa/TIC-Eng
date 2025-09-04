import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("⚠️ Admin user already exists:", existingAdmin.email);
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("Admin-Tic-Eng", 10);

    const admin = new User({
      userName: "Admin-Tic",
      email: "admin@tic-eng.com",
      password: hashedPassword,
      role: "admin",
    });

    await admin.save();
    console.log("✅ Admin created:", admin.email);

    process.exit();
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
};

createAdmin();
