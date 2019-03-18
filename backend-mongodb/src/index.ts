import * as cors from "cors";
import * as dotenv from "dotenv";
import * as express from "express";
import * as mongoose from "mongoose";
import Routes from "./routes";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.use(Routes);

app.listen(process.env.PORT || 3000, () => {
    console.log("[server running]");
});
