import { Router } from "express";
import {
  AuthenticateEmail,
  AuthenticateUsername,
  UserById,
  UserByUsername,
  UserCreate,
  UserGetAll,
} from "../controllers/UserController";

const routes = Router();

routes.post("/user", UserCreate);
routes.get("/users", UserGetAll);
routes.get("/user/:id", UserByUsername);
routes.get("/user/:username", UserById);
routes.get("/usernameAuthenticate", AuthenticateUsername);
routes.get("/emailAuthenticate", AuthenticateEmail);

export default routes;
