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

    const {id: _id} = req.params; //same as --> id = req.params.id;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with the id: ${_id}`)

  
    //find post by id and update
    const updatedPost = await PostModel.findByIdAndUpdate(_id, {...post, _id}, {new: true})
    
    res.json(updatedPost)


} 