//connect backend with front end using AXIOS
import axios from 'axios';

// specify url 
const url = "http://localhost:5000/posts";


// get from mongoDB
export const fetchPosts = () => {
    return axios.get(url);
}


// post to mongoDB
export const createPost = (postData) => {
   return axios.post(url, postData)
}


// update mongoDB
export const updatePost = (id, updatedPost) => {
    return axios.patch(`${url}/${id}`, updatedPost);
}

