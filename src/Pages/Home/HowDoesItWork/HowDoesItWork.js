import React from 'react';
import { Link } from 'react-router-dom';

const HowDoesItWork = () => {
    return (
        <div>
            <div className="container mx-auto">
                <section className="text-gray-600 body-font bg-yellow-50 ">
                    <div className="container px-5 py-24 mx-auto ">
                        <div className="text-center mb-20">
                            <h1 className="lg:text-5xl sm:text-3xl text-5xl font-bold title-font mb-4 text-yellow-600">How does it work</h1>

                            <div className="flex mt-6 justify-center">
                                <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            <div className="p-2 lg:w-1/4 sm:w-1/5  flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                                    <img src="https://i.ibb.co/YBM1sGH/Map-Marker.png" alt="" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="lg:font-bold text-gray-900 text-lg title-font font-medium mb-3 ">Select location</h2>
                                    <p className="leading-relaxed text-base">Choose the location where your food will be delivered.</p>
                                    <Link className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/4 sm:w-1/5 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                                    <img src="https://i.ibb.co/JQDrjHm/Menu.png" alt="" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="lg:font-bold text-gray-900 text-lg title-font font-medium mb-3">Choose order</h2>
                                    <p className="leading-relaxed text-base">Check over hundreds of menus to pick your favorite food</p>
                                    <Link className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/4 sm:w-1/5 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                                    <img src="https://i.ibb.co/HqyNVYc/Icons.png" alt="" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="lg:font-bold text-gray-900 text-lg title-font font-medium mb-3">Pay advanced</h2>
                                    <p className="leading-relaxed text-base">It's quick, safe, and simple. Select several methods of payment</p>
                                    <Link className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/4 sm:w-1/5 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                                    <img src="https://i.ibb.co/t3606Qq/Icons-1.png" alt="" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="lg:font-bold text-gray-900 text-lg title-font font-medium mb-3">Enjoy meals</h2>
                                    <p className="leading-relaxed text-base">Food is made and delivered directly to your home.</p>
                                    <Link className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default HowDoesItWork;