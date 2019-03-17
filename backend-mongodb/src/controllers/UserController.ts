import * as bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import User from "../models/User";

export async function UserCreate(request: Request, response: Response) {
    try {
        const user = await User.create(request.body);
        return response.json(user);
    } catch (err) {
        return response.status(400).send({ error: "Bad Request" });
    }
}

export async function UserGetAll(request: Request, response: Response) {
    try {
        const users = await User.find({});
        return response.json(users);
    } catch (err) {
        return response.status(400).send({ error: "Bad Request" });
    }
}
export async function UserById(request: Request, response: Response) {
    try {
        const user = await User.findById(request.params.id);
        return response.json(user);
    } catch (err) {
        return response.status(400).send({ error: "Bad Request" });
    }
}
export async function UserByUsername(request: Request, response: Response) {
    try {
        const user = await User.findOne(request.params.username);
        return response.json(user);
    } catch (err) {
        return response.status(400).send({ error: "Bad Request" });
    }
}
export async function UserDeleteById(request: Request, response: Response) {}

export async function AuthenticateUsername(
    request: Request,
    response: Response,
) {
    const { username, password } = request.body;
    try {
        const user = await User.findOne({ username }).select("+password");
        if (!user) {
            return response.status(400).send({ error: "User not Found" });
        }

        if (!(await bcryptjs.compare(password, user.password))) {
            return response.status(400).send({ error: "Senha Invalida" });
        }

        response.send({ user });
    } catch (err) {
        console.log(err);
    }
}
export async function AuthenticateEmail(request: Request, response: Response) {
    const { email, password } = request.body;
    try {
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return response.status(400).send({ error: "User not Found" });
        }

        if (!(await bcryptjs.compare(password, user.password))) {
            return response.status(400).send({ error: "Senha Invalida" });
        }

        response.send({ user });
    } catch (err) {
        console.log(err);
    }
}
