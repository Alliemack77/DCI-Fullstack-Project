import express from 'express';
const postsRouter = express.Router();
import {getPosts, createPost} from '../controllers/postsController.js';


postsRouter.get('/', getPosts);

postsRouter.post('/', createPost);


export default postsRouter;
