import { getSession } from "next-auth/react";
import Order from "../../../../../models/Order";
import db from "../../../../../utils/db";

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send("Error: signin required");
  }
  await db.connect();
  const order = await Order.findById(req.query.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const deliveredOrder = await order.save();
    await db.disconnect();
    res.send({
      message: "order delivered successfully",
      order: deliveredOrder,
    });
  } else {
    await db.disconnect();
    res.status(404).send({ message: "Error: order not found" });
  }
};

export default handler;

/* This API route handler allows authenticated users with admin privileges
 to mark an order as delivered. It first verifies the user's session, 
 updates the order status, and returns appropriate responses based on 
 the success or failure of the operation. */
