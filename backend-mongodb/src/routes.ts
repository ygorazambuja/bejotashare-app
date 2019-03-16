import { Router } from "express";

import UsersRoutes from "./routes/UsersRoutes";
import FilmeRoutes from "./routes/FilmeRoutes";
const routes = Router();

routes.use(UsersRoutes);
routes.use(FilmeRoutes);

export default routes;
