import { Request, Response } from "express";
import userModel from "../model/user.model";
import bcrypt from "bcrypt";



export const register = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { email, password, name, confirmPassword } = req.body;
      const salt: string = await bcrypt.genSalt(10);
      const hash: string = await bcrypt.hash(password, salt);
      const createUser = await userModel.create({ email, password: hash, name, confirmPassword: hash });
      return res.status(200).json({
        message: "successfully Posted",
        data: createUser,
      });
    } catch (error) {
      return res.status(400).json({
        message: "An error register",
        error: error,
      });
    }
  };


  export const login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { email } = req.body;
      const getUser = await userModel.findOne({ email });
      if (!getUser) {
        return res.status(400).json({
          message: "User Not Found",
        });
      }
  
      return res.status(200).json({
        message: `welcome ${getUser.name}`,
        data: getUser,
      });
    } catch (error) {
      return res.status(400).json({
        message: "An error in login",
        error: error,
      });
    }
  };



export const getAllUser = async (req: Request, res: Response) => {
    const getAllUser = await userModel.find();
    return res.status(200).json({
      message: `${getAllUser.length}`,
      data: getAllUser,
    });
  };