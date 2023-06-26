import User from "../Model/user-schema.js";

export const postUserData = async (req, res) =>{
    const userData = req.body;
    const validatedUser = new User(userData);
    console.log(validatedUser);
    try{
        await validatedUser.save();
        res.status(201).json(validatedUser);
    }catch(error){
        console.log(error);
        res.status(409).json({message : error.message})
    }
    // console.log('hello');
}