import express from "express"
import { loginUser, logout, profile, registerUser } from "../controllers/server.controllers.js";
import { isAutheticated } from "../middleware/auth.js";

const routes = express.Router();

routes.post("/register", registerUser);
routes.post("/login", loginUser);

routes.get("/logout", logout);
routes.get("/profile",isAutheticated, profile);

export default routes;