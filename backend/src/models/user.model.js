import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minlength: [3, "Username must be at least 3 characters long"],
        maxlength: [20, "Username must be at most 20 characters long"],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 8 characters long"],
        maxlength: [20, "Password must be at most 20 characters long"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: "Invalid email address",
        },
    },
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export { User };