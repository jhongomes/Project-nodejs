import "reflect-metadata";

import express, { Request, Response, NextFunction} from "express";

import "express-async-errors";

import "../../errors/AppError";
import { AppError } from "../../errors/AppError";

import "../../container";

import "../typeorm"

import { router } from './routes'

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response:Response, next:NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    })
})
  app.listen(3000, () => console.log("Server is running"));
  