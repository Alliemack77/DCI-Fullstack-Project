import express from 'express';
const postsRouter = express.Router();
import {getPosts, createPost, updatePost, deletePost, updateLikes} from '../controllers/postsController.js';


postsRouter.get('/', getPosts);

postsRouter.post('/', createPost);

postsRouter.patch('/:id', updatePost);

postsRouter.delete('/:id', deletePost);

postsRouter.put('/:id', updateLikes);

export default postsRouter;
