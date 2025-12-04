import { Post } from "../models/post.model.js";

// Create a new post

const createPost = async (req, res) => {
    try{
        const {name, description, age} = req.body;
        if (!name || !description || !age) {
            return res.status(400).json({message: "All fields are required"});
        }

        // create new post
        const post = await Post.create({name, description, age});
        res.status(201).json({message: "Post created successfully", post: post});
    }
    catch(error){
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}


const getPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json({message: "Posts fetched successfully", posts: posts});
    }
    catch(error){
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}


const updatePost = async (req, res) => {
    try{
        // basic validation to check if the body is empty

        // { name: x, description: y, age: z } -> [ "name", "description", "age" ]
        // {} = truthy value
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({message: "No data provided"});
        }

        // check if the post exists
        const post = await Post.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true}
        );
        if (!post) {
            return res.status(404).json({message: "Post not found"});
        }
        res.status(200).json({message: "Post updated successfully", post: post});
    }
    catch(error){
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}


const deletePost = async (req, res) => {
    try{
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({message: "Post not found"});
        }
        res.status(200).json({message: "Post deleted successfully", post: deletedPost});
    }
    catch(error){
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}


export {createPost, getPosts, updatePost, deletePost};



