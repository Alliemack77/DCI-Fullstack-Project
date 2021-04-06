import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();

// body parsers
app.use(express.json({limit: '30mb', extended: true})) //limit size of files to 30mb, payloads that are in the body as JSON
app.use(express.urlencoded({limit: '30mb', extended: true})); //payloads that are encoded in the URL
app.use(cors());


// Mongoose connection
const CONNECTION_URL = 'mongodb+srv://image-viewer-user:LU6wWYvbc68Qxzw@cluster0.itfwp.mongodb.net/Image-Viewer-FS-Project?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    })
}).catch(err => {
    console.log(`${err} did not connect.`);
})
mongoose.set('useFindAndModify', false); // to avoid deprecation warnings


//import middleware routes
import postsRouter from './routes/posts.js';
app.use('/posts', postsRouter);