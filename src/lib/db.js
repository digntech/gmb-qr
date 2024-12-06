import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGO_URI;
const options = {};

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

let client = new MongoClient(uri, options);
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to preserve value across module reloads
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new client
  clientPromise = client.connect();
}

export default clientPromise;
