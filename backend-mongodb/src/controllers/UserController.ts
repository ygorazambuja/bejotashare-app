import * as bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import User from "../models/User";
const authConfig = require("../config/auth.json");

function generateToken(params = {}) {
    return jwt.sign({ params }, authConfig.secret, {
        expiresIn: 86400
    });
}

export async function UserCreate(request: Request, response: Response) {
    try {
        const user = await User.create(request.body);
        user.password = undefined;
        return response.json({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
        return response
            .status(400)
            .send({ error: "Bad Request", errorMessage: err });
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
    const { id } = request.params;
    try {
        const user = await User.findOne({ _id: id });
        return response.json(user);
    } catch (err) {
        return response.status(400).send({ error: "Bad Request" });
    }
}
export async function UserByUsername(request: Request, response: Response) {
    try {
        const user = await User.findById(request.body.username);
        return response.json(user);
    } catch (err) {
        return response.status(400).send({ error: "Bad Request" });
    }
}
export async function UserDeleteById(request: Request, response: Response) {}

export async function AuthenticateUser(request: Request, response: Response) {
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
    } catch (err) {}
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

        user.password = undefined;

        console.log(authConfig);

        response.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {}
}
