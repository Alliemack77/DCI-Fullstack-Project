import React from 'react';
import {useSelector} from 'react-redux'; // to fetch data from global redux store, grants 
import {Grid, CircularProgress} from '@material-ui/core';
import Post from '../posts/post/Post';
import useStyles from './styles';


const Posts = () => {

    const classes = useStyles();
    const posts = useSelector((state) => state.posts); //reads from store
    
    
    return (
        !posts.length? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}> 
                    {posts.map((post) => {
                        return (
                            <Grid key={post._id} item xs={12} md={6} >
                                <Post post={post}/>
                            </Grid>
                        )
                    })}
            </Grid>
        )
        
    );
}

export default Posts;
