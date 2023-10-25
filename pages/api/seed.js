import Product from "../../models/Product";
import User from "../../models/User";
import data from "../../utils/data";
import db from "../../utils/db";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
};
export default handler;

//Seed sample users & sample product after connecting to the db

//  used to populate a database with initial or sample data.
// Useful during the development and testing phases of an application
// when you need data in your database to work with and verify that your application behaves as expected.
