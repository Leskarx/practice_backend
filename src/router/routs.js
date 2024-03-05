import { Router } from "express";
import { check, login, register } from "../controllers/controllers.js";
const routes=Router()
routes.get("/check",check);
routes.post("/register",register)
routes.post("/login",login)


export default routes;
