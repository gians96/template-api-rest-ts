import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI;
  await connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
}
export default dbConnect;
