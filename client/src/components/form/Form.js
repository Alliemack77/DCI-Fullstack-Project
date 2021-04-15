import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FileBase from 'react-file-base64';
import { Container, TextField, Button, Typography, Paper } from '@material-ui/core';
import {createPost, updatePost} from '../../actions/posts';
import useStyles from './styles';


const Form = ({currentId, setCurrentId}) => {
    
    
    const [postData, setPostData] = useState({
        author: '',
        title: '',
        message: '',
        tags: '', 
        selectedFile: ''
    })

    const classes = useStyles();

    const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId) : null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (post) {
            setPostData(post)
        }
    }, [post])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData)) // createPost(postData) returns an async function --> 
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            author: '',
            title: '',
            message: '',
            tags: '', 
            selectedFile: ''
        })
    }


    return (
        <Container className={classes.root}>
            <Paper className={classes.paper} elevation={12}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant="h4" align="center"> {currentId? 'Editing': 'Creating'} a post</Typography>

                    <TextField 
                        label='Author'
                        name='author'
                        variant='outlined'
                        fullWidth
                        value={postData.author} // value is stored in the state --> inside postdata object
                        onChange={(e) => setPostData({...postData, author: e.target.value})} //change the value of the state field, update just one of the objs props using event.target, spread first to keep existing info  
                    />

                    <TextField 
                        label='Title'
                        name='title'
                        variant='outlined'
                        fullWidth
                        value={postData.title} 
                        onChange={(e) => setPostData({...postData, title: e.target.value})}
                    />

                    <TextField
                        label='Message'
                        name='message'
                        variant='outlined'
                        fullWidth
                        value={postData.message} 
                        onChange={(e) => setPostData({...postData, message: e.target.value})} 
                    />  

                    <TextField
                        label='Tags'
                        name='tags'
                        variant='outlined'
                        fullWidth
                        value={postData.tags} 
                        onChange={(e) => setPostData({...postData, tags: e.target.value.split(', ')})}
                    />    

                    <div className={classes.fileInput}>
                        <FileBase 
                            type='file'
                            multiple={false}
                            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                        />
                    </div>

                    <Button className={classes.buttonSubmit} variant='contained' color='primary' type="submit" fullWidth>Submit</Button>
                    <Button variant='contained' color='secondary' onClick={clear} fullWidth>Clear</Button>
                </form>

            </Paper>
        </Container>
        

    );

}

export default Form; 