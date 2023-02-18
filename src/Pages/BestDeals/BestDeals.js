import React from 'react';
import { Link } from 'react-router-dom';

const BestDeals = () => {
    return (
        <div>
            <div className="container mx-auto">
                <section className="text-gray-600 body-font ">
                    <div class="text-center mb-10 border-black">
                        <h1 class="lg:text-5xl sm:text-3xl text-5xl font-bold title-font mb-4 text-yellow-600">Best Deals in this Weeks</h1>

                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center px-20   rounded-3xl bg-yellow-100  ">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5 md:mb-0  ">
                            <img className="object-cover object-center rounded " alt="hero" src="https://i.ibb.co/PN8BgJ6/Image-18.png" />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="lg:text-7xl title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 "><span className="text-yellow-400 font-bold text-5xl">Best Deals</span> <br /> Crispy Sandwiches</h1>
                            <p className="mb-8 leading-relaxed">Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.</p>
                            <div className="flex justify-center">
                                <Link to='/product'><button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Proceed to order
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button></Link>

                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center px-20  bottom-6 bg-green-100 rounded-3xl">

                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
                            <h1 className="lg:text-7xl title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400 "><span className="text-black font-bold text-5xl">Celebrate  parties with</span> <br /> Fried Chicken</h1>
                            <p className="mb-8 leading-relaxed">Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.</p>
                            <div className="flex justify-center">
                                <Link to='/product'><button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Proceed to order
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button></Link>

                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0  ">
                            <img className="object-cover object-center rounded " alt="hero" src="https://i.ibb.co/DWNxbNY/Image-19.png" />
                        </div>
                    </div>
                    <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center px-20  bottom-6 bg-red-100 rounded-3xl">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0  ">
                            <img className="object-cover object-center rounded " alt="hero" src="https://i.ibb.co/jGC1rMx/Image-20.png" />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="lg:text-7xl title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400 lg:font-bold "><span className="text-black font-bold text-5xl">Wanna eat hot & spicy </span> <br /> Pizza?</h1>
                            <p className="mb-8 leading-relaxed">Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.</p>
                            <div className="flex justify-center">
                                <Link to='/product'><button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Proceed to order
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
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

export default BestDeals;