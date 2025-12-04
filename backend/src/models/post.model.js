import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true,
            minlength: [3, "Name must be at least 3 characters long"],
            maxlength: [50, "Name must be at most 50 characters long"],
        },
        description:{
            type: String,
            required: true,
            trim: true,
            minlength: [10, "Description must be at least 10 characters long"],
            maxlength: [500, "Description must be at most 500 characters long"],
        },
        age:{
            type: Number,
            required: true,
            min: [0, "Age must be at least 0"],
            max: [100, "Age must be at most 100"],
        },
    },
    {
        timestamps: true,
    }
);


const Post = mongoose.model('Post', postSchema);

export { Post };