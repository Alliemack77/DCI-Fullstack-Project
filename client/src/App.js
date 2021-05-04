import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'; // dispatch actions
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Form from './components/form/Form';
import Posts from './components/posts/Posts';
import {getPosts} from './actions/posts';
import camera from './images/camera.png';
import useStyles from './styles';



const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

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
                    <Grid container justify='space-between' alignItems='stretch' spacing={3} direction='row-reverse' >
                        <Grid item xs={12} sm={6}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
};

export default App;

