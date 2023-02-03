import express, { Application, Request, Response } from "express";
import { config } from "../config/db";
import { appHttp } from './app';

const app: Application = express();
const port: number | string = 6060 || process.env.port;

config();
appHttp(app);

const server = app.listen(port, () => {
  console.log("Done! on port", port);
});

process.on("unhandledRejection", (reason: any) => {
  console.log(`unhandledRejection, server i shutting down`);
  console.log(reason.message, reason);
  server.close(() => {
    process.exit(1);
  });
});