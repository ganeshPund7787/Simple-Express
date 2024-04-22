import express from "express"
import { config } from "dotenv"
import routes from "./routes/user.roues.js";


config({ path: "./.env" })

const app = express()
app.use(routes);


app.listen(4000, () => {
  console.log(`server is working on http://localhost:4000`)
})
