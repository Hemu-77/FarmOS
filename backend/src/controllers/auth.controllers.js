
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const register = async(req,res) => {
   try{
    const { name, email, password, gender } = req.body;

    const user = await userModel.findOne({email});

    if(user){
        return res.status(409).json({
            message: "User already exists. Please sign in.",
          });
        // later add on route to SignIn
    }

    const createNewUser = new userModel({name,email,password,gender});


    await createNewUser.save();

    return res.status(201).json({
        message: `User: ${name} created successfully`,
      });
}catch(err){
    console.log(err)
    return res.status(500).json({
        message: "Internal server error",
      });
}
}


export const signIn = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(401).json({
                message : "Invalid email or passwords"
            })}
        const isPasswordCorrect = await user.comparePassword(password);
        if(!isPasswordCorrect){
            return res.status(401).json({
                message: "Invalid email or passworde"
            });
        }

        const token = jwt.sign({
            userId : user._id
        }, 
        process.env.JWT_SECRET,
        {
            expiresIn : "24h"
        })

        return res.status(200).json({
            message: "Sign in successfull",
            token
        });

        
        }catch(err){
            console.log(err)
            return res.status(500).json({
                message: "Internal server error",
              });
    }
    }


    export const getMe = async(req, res) => {

        const user = await userModel.findById(req.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }


        return res.status(200).json({
            message: "Authenticated successfully",
            userId: req.userId,
            name : user.name,
            email : user.email,
            gender : user.gender,
            createdAt : user.createdAt
        });
    };