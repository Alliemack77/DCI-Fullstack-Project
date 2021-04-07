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
