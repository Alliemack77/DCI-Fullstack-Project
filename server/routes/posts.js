import express from 'express';
const postsRouter = express.Router();
import {getPosts, createPost, updatePost} from '../controllers/postsController.js';


postsRouter.get('/', getPosts);

postsRouter.post('/', createPost);

postsRouter.patch('/:id', updatePost);


export default postsRouter;
