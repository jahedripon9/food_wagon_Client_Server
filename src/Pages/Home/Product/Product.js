import React, { useEffect, useState } from 'react';
import PopularItem from '../PopularItem/PopularItem';
import PopularItems from '../PopularItems/PopularItems';

const Product = ({product}) => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/fooditems')
        .then(rse => rse.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
            
                {
                    products.map(product => <PopularItems
                    key={product.id}
                    product={product}
                    ></PopularItems>)
                }
            </div>
    
    );
};

export default Product;