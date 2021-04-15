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
    const updatedPost = await PostModel.findByIdAndUpdate(_id, {...post, _id}, {new: true}) //returns updated post
    
    res.json(updatedPost)


} 

// /posts/id
// 
export const deletePost = async (req, res) => {

    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with the id: ${id}`);

    try {
        await PostModel.findOneAndDelete(id, (err) => {
            if(err) {
                res.json(err)
            }else {
                console.log("Post deleted")
                res.json('Post deleted successfully');
            }
        })
    }catch (err) {
        console.log(error.message)
    }

}

export const updateLikes = async (req, res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with the id: ${id}`);

    try{
        const counter = {$inc: {likeCount: 1}};
        await PostModel.findByIdAndUpdate(id, counter, {new: true}, (err, doc) => {
            if (err) {
                res.json(err);
            }else {
                console.log("likes increased")
                res.json(doc) // send post back to action
            }
        })
    }catch (error) {
        console.log(error.message);
    }


}