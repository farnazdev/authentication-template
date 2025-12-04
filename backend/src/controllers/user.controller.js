import { User } from "../models/user.model.js";


const registerUser = async (req, res) => {
    try{
        const {username, password, email} = req.body;

        if (!username || !password || !email) {
            return res.status(400).json({message: "All fields are required"});
        }

        // check if user already exists

        const existingUser = await User.findOne({email: email.toLowerCase()});
        if (existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        // create new user

        const user = await User.create({
            username, 
            email: email.toLowerCase(), 
            password,
            loggedIn: false,
        });

        res.status(201).json({
            message: "User created successfully", 
            user: {id: user._id, email: user.email, username: user.username}
        });
    }
    catch(error){
        res.status(500).json({message: "Internal server error", error: error.message});
    }

};

const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        // check if user exists

        const user = await User.findOne({email: email.toLowerCase()});
        if (!user) {
            return res.status(400).json({message: "User not found"});
        }


        // compare password
        const isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
            return res.status(400).json({message: "Invalid password"});
        }

        res.status(200).json({
            message: "Login successful", 
            user: {
                id: user._id, 
                email: user.email, 
                username: user.username
            }
        });
    
    }
    catch(error){
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}

const logoutUser = async (req, res) => {
    try{
        const {email} = req.body;

        if (!email) {
            return res.status(400).json({message: "Email is required"});
        }

        // check if user exists
        const user = await User.findOne({
            email: email.toLowerCase()
        });

        if (!user) {
            return res.status(404).json({message: "User not found"});
        }

        res.status(200).json({message: "Logout successful"});
    }
    catch(error){
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}


export { 
    registerUser,
    loginUser,
    logoutUser
};