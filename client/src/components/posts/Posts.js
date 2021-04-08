import React from 'react';
import {useSelector} from 'react-redux';
import {Typography} from '@material-ui/core';
import Post from '../posts/post/Post';
import useStyles from './styles';


const Posts = () => {

    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    
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
