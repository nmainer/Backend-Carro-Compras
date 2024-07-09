import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request,Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req:Request , res: Response , next: NextFunction) {
     console.log (`estas ejecutando el metodo ${req.method} en la ruta ${req.url}`);
     next();
    }
};

export function LoggerUsers (req:Request , res: Response , next: NextFunction){
    const date= new Date();
    console.log (`estas ejecutando el metodo ${req.method} en la ruta ${req.url} y hora ${date}`);
    next();
};

