import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState; // no need to connect to db if we are already connected
    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return;
    }
    await mongoose.disconnect(); //otherwise we disconnect cuz we 're not in connected mode
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log("new connection");
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      // only disconnect in production mode
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}
function convertDocToObj(doc) {
  //converting objects to string
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}
const db = { connect, disconnect, convertDocToObj };
export default db;

/*The above code module provides functions for connecting to and disconnecting 
from a MongoDB database using Mongoose. Once connected, no need to reconnect as changes occur in 
dev mode. This avoids use of too much processes each time we make a change during development.
 But it disconnects only in production mode.
It also includes a utility function 
for converting MongoDB documents to JavaScript objects. Additionally, 
it manages the connection state to prevent unnecessary reconnections 
or disconnections.*/
