import express from 'express';
const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    console.log('Hello, world!');

});

export default postsRouter;