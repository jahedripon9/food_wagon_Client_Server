import React, { useEffect, useState } from 'react';
import PopularItem from '../PopularItem/PopularItem';
import './PopularItems.css'

const PopularItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://food-wagon-server.vercel.app/fooditems')
            .then(rse => rse.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <div className=" text-center my-5 ">
                <h1 className="lg:text-5xl sm:text-3xl text-5xl font-bold title-font mb-2 text-yellow-600">Popular items</h1>

                <div className="flex mt-6 ">
                    <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex mx-auto" ></div>
                </div>
            </div>

            <div className='item-container '>
                {
                    items.slice(0, 12).map(item => <PopularItem
                        key={item._id}
                        item={item}
                    ></PopularItem>)
                }
            </div>
        </div>
    );
};

export default PopularItems;