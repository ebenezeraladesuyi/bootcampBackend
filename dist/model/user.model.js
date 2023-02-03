"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "please, enter your name"],
    },
    email: {
        type: String,
        reuired: [true, "please, enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "please, enter a password"],
    },
    confirmPassword: {
        type: String,
        required: [true, "please, confirm your password"]
    }
});
const userModel = (0, mongoose_1.model)("user", userSchema);
exports.default = userModel;
