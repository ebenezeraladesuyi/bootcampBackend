import mongoose, {  Document, Schema, model } from "mongoose";
import { userData } from "../interface/user.interface";


interface dataSchema extends userData, Document {}

const userSchema = new Schema({
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
})

const userModel = model<dataSchema>("user", userSchema)

export default userModel;
