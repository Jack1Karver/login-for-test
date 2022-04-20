import { Request, Response } from "express";

interface User{
    login: string;
    password: string;
}

export class SaveData{

    run(req: Request, res: Response) {
        const user: User = req.body
        console.log(user.login + '   '+ user.password)
    }
}