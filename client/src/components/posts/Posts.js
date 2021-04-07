import React from 'react';
import {Typography} from '@material-ui/core';
import Post from '../posts/post/Post';
import useStyles from './styles';


const Posts = () => {

    const classes = useStyles();
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
