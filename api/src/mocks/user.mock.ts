import { log } from "node:console";
import type { User } from "../types/user.type.ts";

const users: User[] = [{
    id: 1,
    name: "Alex Bessa",
    email: "alex@email.com",
    password: crypto.randomUUID()
},{
    id:2,
    name: "Bruninha",
    email:"bruninhakk@email.com",
    password: crypto.randomUUID()
},{
    id: 3,
    name: "Ana Bbssa",
    email: "aninha@email.com",
    password: crypto.randomUUID()
}];

export default users;