import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Form from './components/form/Form'
import Posts from './components/posts/Posts'
import camera from './images/camera.png'
import useStyles from './styles';



const App = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>
                    Imageboard
                </Typography>
                <img className={classes.image} src={camera} alt='icon' height='60'/>
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

