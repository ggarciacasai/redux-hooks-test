import {GET_POSTS} from '../types'

const initialState = {
    list:[],
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_POSTS:
        return {
            ...state,
            list:action.payload,
            loading:false
        }
        default: return state
    }

}