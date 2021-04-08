//connect backebd with front end using AXIOS
import axios from 'axios';

// specify url 
const url = "http://localhost:5000/posts";

// returns get request
export const fetchPosts = () => {
    return axios.get(url);
}

// returns post request
export const createPost = (newPost) => {
   return axios.post(url, newPost)
}

