import React, {Component} from 'react';
import {Container, Typography} from '@material-ui/core';
import Post from '../posts/post/Post';

class Posts extends Component {
    render() {
        return (
            <Container>
                <Typography varient='h1' align='center'>
                    POSTS
                </Typography>
                <Post />
                <Post />

            </Container>
        );
    }
}

export default Posts;
