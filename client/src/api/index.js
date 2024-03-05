import axios from 'axios';

const API=axios.create({ baseURL:"http://localhost:5000" });
//const URL = "http://localhost:5000/posts";
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
});
//will perform this for each request and helps auth middleware,sends token to bakend to verify that we are logged in

export const fetchPosts=()=>API.get("/posts");
export const createPost =(newdata)=>API.post("/posts",newdata);
export const updatePost =(id,updatedPost)=>API.patch(`/posts/${id}`,updatedPost);
export const deletePost =(id )=>API.delete(`/posts/${id}`);


export const signin = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

// export const fetchPosts=()=>axios.get(URL);
// export const createPost =(newdata)=>axios.post(URL,newdata);
// export const updatePost =(id,updatedPost)=>axios.patch(`${URL}/${id}`,updatedPost);
// export const deletePost =(id )=>axios.delete(`${URL}/${id}`);