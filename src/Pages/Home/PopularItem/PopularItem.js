import React from 'react';
import { Link } from 'react-router-dom';
import './PopularItem.css';

const PopularItem = ({item}) => {
    const { _id, name, price, description, img } = item;
    return (
        <div>
            <div className="container mx-auto ">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-1 mx-auto ">
                        <div className="item flex flex-wrap-m-4 justify-around ">
                            <div className="lg:w-full md:w-1/2 p-4 ">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="" className="object-cover object-center w-full h-full block" src={img} />
                        </a>
                        <div className="mt-4 ">
                        
                        <h2 className="text-gray-900 title-font text-lg font-bold">{name}</h2>
                        <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg></span>
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 font-bold">{description}</h3>
                        
                        <p className="mt-1 font-bold text-red-500 text-2xl">${price}</p>
                        </div>
                        <Link to={`/deliveryinfo/${_id}`}><button className="text-white inline-flex items-center lg:font-bold md:mb-2 lg:mb-0 bg-yellow-500 px-12 py-2 rounded-3xl">Place Order
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </button></Link>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
};

export default PopularItem;