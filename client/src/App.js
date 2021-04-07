import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Form from './components/form/Form'
import Posts from './components/posts/Posts'
import camera from './images/camera.png'



const App = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>
                    Imageboard
                </Typography>
                <img src={camera} alt='icon' height='60'/>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts></Posts>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Form></Form>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
};

export default App;

