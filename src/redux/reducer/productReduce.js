
import { ActionTypes } from './../constant/action-type';
const initialState ={
    products:[]
}
// reduser take 2 parametwe as initail state and 2nd is action
export const productReducer = (state=initialState,{type,data}) =>{
    switch(type){
        case ActionTypes.SET_PRODUCT:
            return {
                ...state, 
                products:data
            }
            default:
                return state;

    }

}
export const selectedProductReducer = (state={},{type,data}) =>{

    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {
     ...state ,
     ...data
            }
            default :
            return state;
    }
}