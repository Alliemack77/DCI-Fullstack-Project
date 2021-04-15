const postsReducer = (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        
        case "CREATE":
            return [...posts, action.payload];

        case "UPDATE":
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);

        case "DELETE":
            return posts.filter((post) => (action.payload._id !== post._id )) // filter out posts that do not match the payload._id and return them

        default:
            return posts;
    }
}

// reducer is a func that accepts state and action
// state should always equal something --> posts = []

export default postsReducer;