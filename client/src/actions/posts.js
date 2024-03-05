import * as api from '../api/index';

export const getPosts=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchPosts();
        // console.log(data);
        dispatch({type:"FETCH_POSTS",payload:data});
        
    }
    catch(err){
        console.log(err);

    }
}

export const createPost =(post)=>async (dispatch)=>{
    try{
        const {data}=await api.createPost(post);
         console.log(data);
        dispatch({type:"CREATE_POST",payload:data});
        //as i want to dispatch the actions so i will go to form now

    }
    catch(err){
        console.log(err);

    }

}

export const updatePost =(id,post)=>async (dispatch)=>{
    try{
        const {data}=await api.updatePost(id,post);
        //console.log(data);
        dispatch({type:"UPDATE_POST",payload:data});
        //as i want to dispatch the actions so i will go to form now

    }
    catch(err){
        console.log(err);

    }

}
export const deletePost=(id)=>async(dispatch)=>{
    try{
        await api.deletePost(id);
        
        dispatch({type:"DELETE_POST",payload:id});
        //as i want to dispatch the actions so i will go to form now

    }
    catch(err){
        console.log(err);

    }
}
// export const likePost = (id) => async (dispatch) => {
//     try {
//       const { data } = await api.likePost(id);
  
//       dispatch({ type: LIKE, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
