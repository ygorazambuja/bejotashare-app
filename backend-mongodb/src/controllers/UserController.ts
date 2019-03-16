import { Request, Response } from "express";
import User from "../models/User";

export async function UserCreate(request: Request, response: Response) {
  try {
    const user = await User.create(request.body);
    return response.json(user);
  } catch (err) {
    return response.sendStatus(400);
  }
}

export async function UserGetAll(request: Request, response: Response) {
  try {
    const users = await User.find({});
    return response.json(users);
  } catch (err) {
    return response.sendStatus(400);
  }
}
export async function UserById(request: Request, response: Response) {
  try {
    const user = await User.findById(request.params.id);
    return response.json(user);
  } catch (err) {
    return response.sendStatus(400);
  }
}
export async function UserByUsername(request: Request, response: Response) {
  try {
    const user = await User.findOne(request.params.username);
    return response.json(user);
  } catch (err) {
    return response.sendStatus(400);
  }
}
export async function UserDeleteById(request: Request, response: Response) {}
