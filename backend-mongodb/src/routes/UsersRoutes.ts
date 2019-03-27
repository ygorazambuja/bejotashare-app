import { Router } from "express";
import {
    AuthenticateEmail,
    AuthenticateUser,
    UserById,
    UserByUsername,
    UserCreate,
    UserGetAll
} from "../controllers/UserController";

const routes = Router();

routes.post("/user", UserCreate);
routes.post("/emailAuthenticate", AuthenticateEmail);

routes.get("/users", UserGetAll);
routes.get("/userById/:id", UserById);
routes.get("/userByUsername", UserByUsername);
routes.get("/usernameAuthenticate", AuthenticateUser);

export default routes;
