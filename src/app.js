import Express from "express";
import cors from "cors"
import routes from "./router/routs.js";

const app=Express()
app.use(cors())
app.use(Express.json());
app.use("/api",routes)
export {app};