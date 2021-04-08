// reducer is a func that accepts state and action
// state should always equal something --> posts = []
export default (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        
        case "CREATE":
            return [...posts, action.payload];

        default:
            return posts;
    }
}