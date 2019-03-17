import { Router } from "express";

import FilmeRoutes from "./routes/FilmeRoutes";
import UsersRoutes from "./routes/UsersRoutes";
const routes = Router();

routes.use(UsersRoutes);
routes.use(FilmeRoutes);

export default routes;
