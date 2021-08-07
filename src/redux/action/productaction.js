import {ActionTypes} from '../constant/action-type';
// for all product
export const setProduct = (products)=>{
    return {
        type:ActionTypes.SET_PRODUCT,
        data:products
    }
};

// For selected product

export const selectedProduct = (product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        data:product
    }
}
// remove selected product

export const removeSelectedProduct = ()=>{
    return {
        typr:ActionTypes.REMOVE_SELECTED_PRODUCT,

    }
}