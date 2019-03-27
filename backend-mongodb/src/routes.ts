import { Router } from "express";

import FilmeRoutes from "./routes/FilmeRoutes";
import HomeRoutes from "./routes/HomeRoutes";
import UsersRoutes from "./routes/UsersRoutes";
const routes = Router();

routes.use(UsersRoutes);
routes.use(FilmeRoutes);
routes.use(HomeRoutes);

export default routes;
