import * as api from '../api';

// Action Creators
// functions that return actions --> takes time, must use async/await

export const getPosts = () => async (dispatch) => {

    try {
        //grab posts (data) from the backend
        const {data} = await api.fetchPosts(); 

        // update redux state
        dispatch({
            type: "FETCH_ALL", 
            payload: data
        });

    }catch(error) {
        console.log(error.message)
    }
};


export const createPost = (post) => async (dispatch) => { //postData param is from the Form postData --> returns the async function 
    
    try{
        //send data to mongoDB
        const {data} = await api.createPost(post);
        console.log("DATA: ", data)

        // update redux state
        dispatch({
            type: "CREATE", 
            payload: data
        });
        
    }catch(error) {
        console.log(error.message)
    }
}


export const updatePost = (id, post) => async (dispatch) => {

    try {
        const {data} = await api.updatePost(id, post);
        dispatch({
            type: "UPDATE",
            payload: data
        });

    }catch (error) {
        console.log(error.message)
    }
}


export const deletePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.deletePost(id);
        console.log('deleting')
        dispatch({
            type: "DELETE",
            payload: data // only id
        })
    } catch (error) {
        console.log(error.message);
    }
    
}