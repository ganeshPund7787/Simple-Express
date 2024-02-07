import express from "express"
import { config } from "dotenv"
import { about, contact, home } from "./controllers/server.controllers.js"

config({ path: "./.env" })

const app = express()

app.get("/", home)

app.get("/about", about)

app.get("/contact", contact)

app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`)
})
