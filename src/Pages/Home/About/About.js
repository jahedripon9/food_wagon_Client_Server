import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container mx-auto">
                <section className="text-gray-600 body-font">
                    <h1 className='text-6xl font-bold mt-16'>About <br /> Food Wagon</h1>
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-4 px-4 mb-6">
                                <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Most loved and fastest growing retail chains in the world</h1>
                                <div className="leading-relaxed">©, a subsidiary of Yum! Brands, is the world’s most popular chicken restaurant chain specializing in OriginalRecipe©, Extra Crispy™, Kentucky Grilled Chicken©, Extra Crispy™ Strips and Extra Crispy™ Boneless, with home-style sides, Hot Wings™, and freshly made chicken sandwiches.</div>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900">2012</h2>
                                <p className="leading-relaxed">Since</p>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                                <p className="leading-relaxed">Restaurants</p>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900">3.5M</h2>
                                <p className="leading-relaxed">Customer</p>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900">223</h2>
                                <p className="leading-relaxed">Products</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <img className="object-cover object-center w-full h-full" src="https://i.ibb.co/r56RNqQ/App-Download.png" alt="stats" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;