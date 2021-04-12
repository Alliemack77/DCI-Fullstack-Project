import React from 'react';
import {useSelector} from 'react-redux'; // to fetch data from global redux store, grants 
import {Typography} from '@material-ui/core';
import Post from '../posts/post/Post';
import useStyles from './styles';


const Posts = () => {

    const classes = useStyles();
    const posts = useSelector((state) => state.posts); //reads from store
    console.log("POSTS", posts);
    
    return (
        <>
            <Typography varient='h1' align='center'>
                POSTS
            </Typography>
            <Post />
            <Post />

        </>
    );
}

export default Posts;
