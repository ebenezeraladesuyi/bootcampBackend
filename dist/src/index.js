"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../config/db");
const app_1 = require("./app");
const app = (0, express_1.default)();
const port = 6060 || process.env.port;
(0, db_1.config)();
(0, app_1.appHttp)(app);
const server = app.listen(port, () => {
    console.log("Done! on port", port);
});
process.on("unhandledRejection", (reason) => {
    console.log(`unhandledRejection, server i shutting down`);
    console.log(reason.message, reason);
    server.close(() => {
        process.exit(1);
    });
});
