import express from "express"
import { loginUser, registerUser } from "../controllers/server.controllers.js";

const routes = express.Router();

routes.post("/register", registerUser);
routes.post("/login", loginUser);

routes.get("/logout");
routes.get("/profile");

export default routes;