import express from 'express';
const postsRouter = express.Router();
import {getPosts, createPost, updatePost, deletePost} from '../controllers/postsController.js';


postsRouter.get('/', getPosts);

postsRouter.post('/', createPost);

postsRouter.patch('/:id', updatePost);

postsRouter.delete('/:id', deletePost);


export default postsRouter;
