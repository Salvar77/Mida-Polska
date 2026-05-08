import mongoose, { Schema, models } from "mongoose";

const AdminUserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

const AdminUser = models.AdminUser || mongoose.model("AdminUser", AdminUserSchema);
export default AdminUser;
