import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "../router/user.router";


export const appHttp = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use(morgan("dev")) // middleware Configuration


    .use("/api", router)
    
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      res.status(404).json({
        message: `This route ${req.originalUrl} NotFound `,
      });
    });

  // error handlers: note: it should be the last in your app
};
