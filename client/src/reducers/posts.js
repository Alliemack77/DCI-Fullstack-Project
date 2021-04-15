const postsReducer = (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        
        case "CREATE":
            return [...posts, action.payload];

        case "UPDATE":
        case "UPDATE_LIKES":
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);

        case "DELETE":
            return posts.filter((post) => post._id !== action.payload) // return an array that has only the posts that do not match the payload (id--> a number) 
        default:
            return posts;
    }
}



// reducer is a func that accepts state and action
// state should always equal something --> posts = []

export default postsReducer;