import mongoose from 'mongoose';
import { PostModel } from '../models/postModel.js';

// /posts
export const getPosts = async (req, res) => {
    try {
        //get all posts in DB
        await PostModel.find({}).then((docs) => {
            res.json(docs);
        }).catch(err => {
            res.json(err);
        })
    } catch(error) {
        res.json(error);
    }
}

// /posts
export const createPost = async (req, res) => {
    const newPost = req.body;
    const post = new PostModel(newPost);
    console.log(post);

    try {
        await post.save().then(() => {
            console.log("Post created");
            res.send(post);
        }).catch(err => {
            res.json({message: err});
        })
    } catch(error) {
        res.json({message: error})
    }
}


// /posts/id
export const updatePost = async (req, res) => {

    const {id} = req.params; //same as --> id = req.params.id;
    const {title, message, author, selectedFile, tags} = req.body;

    if(!mongoose.Types.ObjectOId.isvalid(id)) return res.status(404).send(`No post with the id: ${id}`)

    const updatedPost = {
        title, 
        message, 
        author, 
        selectedFile, 
        tags, 
        _id: id
    }
  
    //find post by id and update
    await PostModel.findByIdAndUpdate(id, updatedPost, {new: true})
    
    res.json(updatedPost)


} 