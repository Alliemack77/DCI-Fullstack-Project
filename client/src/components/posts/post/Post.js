import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';


const Post = () => {

    const classes = useStyles();
    return (
        <Typography varient='h2' align='center'>
            A Single Post
        </Typography>
    );
}

export default Post;