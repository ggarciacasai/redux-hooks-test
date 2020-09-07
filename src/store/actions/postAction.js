import {GET_POSTS, GET_USERS, POSTS_ERROR, USERS_ERROR} from '../types'
import axios from 'axios'

export const getPostsAction = () => async dispatch => {    
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch( {
            type: GET_POSTS,
            payload: res.data
        }) 
    }
    catch(e){
        dispatch( {
            type: POSTS_ERROR,
            payload: console.log(e),
        })
    }

}