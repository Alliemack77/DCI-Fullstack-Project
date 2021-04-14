import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: String, 
    message: String,
    author: String,
    selectedFile: String, //convert imgs to strings
    tags: [String], 
    likeCount: {
        type: Number, 
        default: 0
    }
}, {timestamps: true});

export const PostModel = mongoose.model('post', postSchema);

