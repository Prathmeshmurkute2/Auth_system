import User from "../models/user.model.js";
import jwt from 'jwt'

export const singup = async (req,res) =>{
    const { name, email, password } = req.body;


}

export const login = async (req,res) =>{
    const { email, password } = req.body;
    
    const userExist = User.findOne({ email });
    if(!userExist){
        return res.status(400).json({ meassage : "User not found" });
    }


}