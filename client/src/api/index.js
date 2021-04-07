//connect backebd with front end using AXIOS
import axios from 'axios';

// specify url 
const url = "http://localhost:5000/posts";

// function that returns axios get request
export const fetchPosts = () => {
    axios.get(url);
}