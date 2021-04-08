import * as api from '../api';

// actions
export const getPosts = () => async (dispatch) => {

    try {
        const {data} = await api.fetchPosts(); //grab posts (data) from teh backend
        dispatch({
            type: "FETCH_ALL", 
            payload: data
        });
    }catch(error) {
        console.log(error.message)
    }
};