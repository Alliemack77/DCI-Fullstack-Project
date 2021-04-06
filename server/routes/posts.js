import express from 'express';
const postsRouter = express.Router();

import {getPosts} from '../controller/postsController.js';


postsRouter.get('/', (req, res) => {
    getPosts(req, res);

});


export default postsRouter;