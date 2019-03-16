import { Router } from "express";
import {
  DeleteById,
  FilmeCreate,
  FilmeGetAll
} from "../controllers/FilmeController";

const routes = Router();

routes.get("/filmes", FilmeGetAll);
routes.post("/filme", FilmeCreate);
routes.delete("/filme", DeleteById);

export default routes;
