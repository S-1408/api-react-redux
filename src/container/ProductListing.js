import axios from 'axios';
import React from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProduct } from './../redux/action/productaction';

const ProductListing = ()=>{
const products = useSelector((state)=>state);
const dispatch = useDispatch();
const  fetchProducts = async() => {
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch(err=>console.log('err',err))
    // console.log(response.data);
    dispatch(setProduct(response.data))
     }
     useEffect(()=>{
         fetchProducts()
     },[]);

console.log('products:',products);
    return (
        <div>
           <ProductComponent/>

        </div>
    )
}
export default ProductListing;