import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { logOut, user} = useAuth();
    return (
        <div className="container mx-auto px-5 bg-yellow-50">
            <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src="https://i.ibb.co/RYDYqS0/logo.png" alt="" />
                <span className="ml-3 text-3xl font-bold text-yellow-300"><span className='text-yellow-600'>food</span> wagon</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link to="/home" className="mr-1 hover:text-gray-900 hover:underline hover:bg-yellow-400 px-2 py-1 rounded-xl">Home</Link>
                <Link to='/about' className="mr-1 hover:text-gray-900 hover:underline hover:bg-yellow-400 px-2 py-1 rounded-xl">About</Link>
                <Link to='/product' className="mr-1 hover:text-gray-900 hover:underline hover:bg-yellow-400 px-2 py-1 rounded-xl">Product</Link>
                {/* <Link to='/contactus' className="mr-1 hover:text-gray-900 hover:underline hover:bg-yellow-400 px-2 py-1 rounded-xl">Contact us</Link> */}
                <Link to='/adfooditems' className="mr-1 hover:text-gray-900 hover:underline hover:bg-yellow-400 px-2 py-1 rounded-xl">Add Food Items</Link>
                <Link to='/managefooditems' className="mr-1 hover:text-gray-900 hover:underline hover:bg-yellow-400 px-2 py-1 rounded-xl">Manage Food Items</Link>
                </nav>
                {/* <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 drop-shadow-md bg-yellow-400">Login
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button> */}
                {user?.email ?
                            <Link onClick={logOut} to='/home' className="ml-auto inline-flex  font-bold text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-lg" > <span><img className='w-6 bg-white mr-2 my-1 rounded-md' src="https://i.ibb.co/w7HtJyq/google.png" alt="" /></span> Log Out </Link>:
                            <Link   to='/login' className="ml-auto inline-flex  font-bold text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-lg" ><span><img className='w-6 bg-white mr-2 my-1 rounded-md' src="https://i.ibb.co/w7HtJyq/google.png" alt="" /></span> Sign In </Link>}
                            <button className="font-bold text-2xl text-indigo-700   pe-5 ml-4 "> Signed in: <a href="/login">{user?.displayName }</a>
                    </button>
            </div>
            </header>
        </div>
    );
};

export default Header;