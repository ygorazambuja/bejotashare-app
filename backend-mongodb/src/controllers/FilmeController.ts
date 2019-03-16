import Film from "../models/Film";
import { Request, Response } from "express";

export const FilmeGetAll = async function(
  request: Request,
  response: Response
) {
  try {
    const filmes = await Film.find({}).sort("name");
    return response.json(filmes);
  } catch (err) {
    console.log(err);
    return response.sendStatus(400);
  }
};

export const FilmeCreate = async function(
  request: Request,
  response: Response
) {
  try {
    const filmes = await Film.create(request.body);
    return response.json(filmes);
  } catch (err) {
    console.log(err);
    return response.sendStatus(400);
  }
};

export const DeleteById = async function(request: Request, response: Response) {
  try {
    const filme = await Film.findByIdAndDelete(request.body);
    return response.json(filme);
  } catch (err) {
    console.log(err);
    return response.sendStatus(400);
  }
};
