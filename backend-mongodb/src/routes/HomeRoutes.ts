import { Router } from "express";
import authMiddleware from "../middlewares/auth";
const routes = Router();

routes.use(authMiddleware);
routes.get("/Home", (req, res, next) => {
    res.send({ heelo: "world" }).sendStatus(200);
});

export default routes;
