import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div class="container mx-auto">
                <section className="text-gray-600 body-font bg-yellow-400 ">
                    <div class="container mx-auto flex px-5 pt-16 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16  md:mb-0 items-center text-center mx-10 ">
                            <h1 className="title-font lg:text-6xl font-bold sm:text-4xl text-3xl mb-4 font-medium text-white">Are you starving?</h1>
                            <p className="mb-8 leading-relaxed font-bold">Within a few clicks, find meals that are accessible near you</p>
                            <div class="flex w-full md:justify-start justify-center items-end p-4 bg-white rounded-lg ">
                                <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4 mx-16">
                                    <div className=' '>
                                        <span ><Link to='/adfooditems'><button className='  bg-green-300 p-1 px-5 rounded-lg mr-6'>Delivery</button> </Link><Link to='/managefooditems'><button className='bg-yellow-300 p-1 px-5 rounded-lg'>Pickup</button></Link></span>
                                    </div> <br />
                                    <br />
                                    <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                                </div>
                                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Serach</button>
                            </div>
                            <br /><br />

                        </div>
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img class="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/n7L6Vqp/Image-Base.png" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;