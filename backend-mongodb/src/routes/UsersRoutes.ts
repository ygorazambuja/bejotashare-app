import { Router } from "express";
import {
  UserById,
  UserByUsername,
  UserCreate,
  UserGetAll
} from "../controllers/UserController";
const routes = Router();

routes.post("/user", UserCreate);
routes.get("/users", UserGetAll);
routes.get("/user/:id", UserByUsername);
routes.get("/user/:username", UserById);

export default routes;
