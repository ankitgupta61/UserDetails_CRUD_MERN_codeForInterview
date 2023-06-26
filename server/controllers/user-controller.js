import User from "../Model/user-schema.js";

export const postUserData = async (req, res) =>{
    const userData = req.body;
    const validatedUser = new User(userData);
    try{
        await validatedUser.save();
        res.status(201).json(validatedUser);
    }catch(error){
        res.status(409).json({message : error.message})
    }
}

export const getUsers = async(req,res) =>{
    const users = await User.find({});
    res.status(200).json(users);
}