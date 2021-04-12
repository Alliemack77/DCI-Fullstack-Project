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


export const createPost = (postData) => async (dispatch) => { //postData param is from the Form postData --> returns the async function 
    
    try{
        //send data to mongoDB
        const {data} = await api.createPost(postData);
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

