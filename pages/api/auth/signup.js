//Creating a user in the db
import bcryptjs from "bcryptjs";
import User from "../../../models/User";
import db from "../../../utils/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  //check if feilds are respected before db connection
  const { name, email, password } = req.body;
  if (
    !name ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({
      message: "Validation error",
    });
    return;
  }

  await db.connect();

  //search if user already exist in db
  //if yes, disconnect db and stop code exe
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    await db.disconnect();
    return;
  }
  // if no, create new user & encript pw
  const newUser = new User({
    name,
    email,
    password: bcryptjs.hashSync(password),
    isAdmin: false,
  });

  const user = await newUser.save();
  await db.disconnect();
  res.status(201).send({
    message: "Created user!",
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
}

export default handler;
