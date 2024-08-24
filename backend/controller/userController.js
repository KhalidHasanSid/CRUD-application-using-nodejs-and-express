const userModel = require('../model/userModel.js');

const getUsers = async(req,res)=>{
    try {
        const users = await userModel.find();
        res.json(users);

    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

const getUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await userModel.findById(id);
        res.json(user);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};

const updateUser = async(req,res)=>{
    try {
        const {id}= req.params;
        const {email, password} = req.body;
        const user = await userModel.findByIdAndUpdate(id,{email,password});
        const updatedUser = await userModel.findById(id);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
  
}

const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await userModel.findByIdAndDelete(id);
        res.json(user);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

const createUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = userModel.create({email,password});
        res.json(user);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
    }


module.exports = {getUser,getUsers,updateUser,deleteUser,createUser};