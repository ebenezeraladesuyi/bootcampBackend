"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const router = (0, express_1.Router)();
router.route("/register").post(user_controller_1.register);
router.route("/login").post(user_controller_1.login);
router.route("/getusers").get(user_controller_1.getAllUser);
exports.default = router;
