import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // 2 users cant have thesame email
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true, //when add a new record, we see createdAt..., updatedAt..
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
