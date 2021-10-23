import {GET_POST} from './actions'

const initialState={
    post :[],
    copyPost:[],
}

function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_POST: return{
            ...state,
            post:action.payload,
            copyPost:action.payload,
        }
        default : return state 
    }
   
}
export default rootReducer