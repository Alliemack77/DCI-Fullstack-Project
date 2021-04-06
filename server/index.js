import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json({limit: '30mb', extended: true})) //limit size of files to 30mb, payloads that are in the body as JSON
app.use(express.urlencoded({limit: '30mb', extended: true})); //payloads that are encoded in the URL
app.use(cors());

// MongoDB connection
const CONNECTION_URL = 'mongodb+srv://image-viewer-user:LU6wWYvbc68Qxzw@cluster0.itfwp.mongodb.net/Image-Viewer-FS-Project?retryWrites=true&w=majority'