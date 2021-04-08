import React, {useState} from 'react';
import FileBase from 'react-file-base64';
import { Container, TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
    
    const classes = useStyles();
    
    const [postData, setPostData] = useState({
        author: '',
        title: '',
        message: '',
        tage: '', 
        selectedFile: ''
    })
    


    const handleSubmit = () => {


    }

    const clear = () => {


    }


    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant="h4">
                        Create a new post
                    </Typography>
                    <TextField 
                        label='Author'
                        name='author'
                        variant='outlined'
                        value={postData.author} // value is stored in the state --> inside postdata object
                        onChange={(e) => {setPostData({...postData, author: e.target.value})}} //change the value of the state field, update just one of the objs props using event.target, spread first to keep existing info  
                    />

                    <TextField 
                        label='Title'
                        name='title'
                        variant='outlined'
                        value={postData.title} 
                        onChange={(e) => {setPostData({...postData, title: e.target.value})}} 
                    />

                    <TextField
                        label='Message'
                        name='message'
                        variant='outlined'
                        value={postData.message} 
                        onChange={(e) => {setPostData({...postData, message: e.target.value})}} 
                    />  

                    <TextField
                        label='Tags'
                        name='tags'
                        variant='outlined'
                        value={postData.tags} 
                        onChange={(e) => {setPostData({...postData, tags: e.target.value})}} 
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