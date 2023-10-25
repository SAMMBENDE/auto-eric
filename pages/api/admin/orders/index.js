import { getSession } from "next-auth/react";
import Order from "../../../../models/Order";
import db from "../../../../utils/db";

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send("signin required");
  }
  if (req.method === "GET") {
    await db.connect();
    const orders = await Order.find({}).populate("user", "name");
    await db.disconnect();
    res.send(orders);
  } else {
    return res.status(400).send({ message: "Method not allowed" });
  }
};

export default handler;

/* This API route handler allows authenticated users with admin privileges 
to retrieve a list of orders from a database when they make a GET request 
to the route. It also includes proper error handling and security checks 
to restrict access to unauthorized users. */
