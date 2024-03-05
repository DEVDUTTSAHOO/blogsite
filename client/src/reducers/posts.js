
const reducer = (posts=[], action)=>{
    switch(action.type)
    {
        // case LIKE:
        //     return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case "DELETE_POST":
            return posts.filter((post) => post._id !== action.payload);
        case "UPDATE_POST":
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        case "FETCH_POSTS":
            return(action.payload);
        case "CREATE_POST":
            return [...posts,action.payload];
            default:
                return posts;
    }

}
export default reducer;

