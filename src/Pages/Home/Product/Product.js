import React, { useEffect, useState } from 'react';
import PopularItem from '../PopularItem/PopularItem';
import PopularItems from '../PopularItems/PopularItems';

const Product = ({ product }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://food-wagon-server.vercel.app/fooditems')
            .then(rse => rse.json())
            .then(data => setProducts(data));
    }, [])
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