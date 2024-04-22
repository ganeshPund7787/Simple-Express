import express from "express"
import { config } from "dotenv"
config({ path: "./.env" })
import routes from "./routes/user.roues.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { mongoConnect } from "./config/data/data.js";


const app = express()
mongoConnect();
app.use(express.json());
app.use(cookieParser());
app.use("/user", routes);

app.get("/", (req, res) => {
  res.send("Home Page");
})

app.use(errorMiddleware);
app.listen(4000, () => {
  console.log(`server is working on http://localhost:4000`)
})
