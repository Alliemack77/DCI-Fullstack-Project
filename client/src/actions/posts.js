import * as api from '../api';

// Action Creators
// functions that return actions --> takes time, must use async/await
export const getPosts = () => async (dispatch) => {

    try {
        //grab posts (data) from the backend
        const {data} = await api.fetchPosts(); 
        dispatch({
            type: "FETCH_ALL", 
            payload: data
        });
    }catch(error) {
        console.log(error.message)
    }
};