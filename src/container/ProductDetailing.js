import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { selectedProduct } from '../redux/action/productaction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ProductDetailing = ()=>{
    const product = useSelector(state=>state.product)
    const {productId} = useParams();
    const dispatch = useDispatch();
    const { id, title, image, price, category,description } = product;

console.log(productId);
console.log(product);

    const fetchProductDetails = async()=>{

        const res = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err=>{console.log(err)})
        //  console.log('Err',res);
        dispatch(selectedProduct(res.data))
        console.log(res.data)

    }
    useEffect(()=>{
        if(productId && productId !== '')
        fetchProductDetails();
    },[productId])
    return (
    

        <div>
          
              {
            Object.keys(product).length === 0 ?
            (
                <div>...Loading</div>
            ):(
                <div key={id} className='text-center'>
                <h1>Product Details</h1>
                <div class="container mr-5">
                <div class="card" style={{ width: "20rem" }} >
                <div class="card-body"  >
                  <img
                    class="card-img-top"
                    src={image}
                    style={{ height: "300px" }}
                    alt=""
                  />
                </div>
                <div class="card-footer">
                  <p>{title}</p>
                  <p>{price}</p>
                  <p>{category}</p>
                 <p>{description}</p> 
                </div>
              </div>
            </div>
                </div>
             
              )}
        </div>
      
       
    )

}
export default ProductDetailing;