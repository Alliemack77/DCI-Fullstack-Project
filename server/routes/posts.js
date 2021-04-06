import express from 'express';
const postsRouter = express.Router();

import {getPosts} from '../controllers/postsController.js';


postsRouter.get('/', getPosts);




export default postsRouter;
