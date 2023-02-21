import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Product', href: '/product', current: false },
    // { name: 'Add Food Items', href: '/adfooditems', current: false },
    // { name: 'Manage Food Items', href: '/managefooditems', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const { logOut, user } = useAuth();
    return (
        <Disclosure as="nav" className="bg-yellow-50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        
                        <div className="relative flex h-16 items-center justify-between">
                            
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                                
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                
                                <div  className="flex flex-shrink-0 items-center">
                                    <img 
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://i.ibb.co/RYDYqS0/logo.png"
                                        alt="Your Company"
                                    />
                                    
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://i.ibb.co/RYDYqS0/logo.png"
                                        alt="Your Company"
                                    />
                                   
                                </div>
                                <a className=" hidden flex title-font font-sm items-center text-gray-900 mb-4 md:mb-0  sm:hidden lg:block">

                                    <span className="ml-3 text-3xl font-bold text-yellow-300   "><span className='text-yellow-600 '>Food</span>Wagon</span>
                                </a>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-yellow-200 text-red-500 font-bold' : 'text-black hover:bg-yellow-200 hover:text-red-500 font-bold',
                                                    'px-3 py-2 rounded-md text-md font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                        <Link to='/adfooditems' className="mt-1 mr-3 ml-auto inline-flex  font-bold text-black bg-yellow-50 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 hover:text-red-500 rounded text-md" >  Add Food Items</Link>
                                        <Link to='/managefooditems' className="mt-1 mr-3 ml-auto inline-flex  font-bold text-black bg-yellow-50 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 hover:text-red-500 rounded text-md" > Manage Food Items </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                

                                {/* Profile dropdown */}
                                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                                    
                                    {/* <Link to='/adfooditems' className="mr-3 ml-auto inline-flex  font-bold text-black bg-yellow-50 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 hover:text-red-500 rounded text-md" >  Add Food Items</Link> 
                                    <Link to='/managefooditems' className="mr-3 ml-auto inline-flex  font-bold text-black bg-yellow-50 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 hover:text-red-500 rounded text-md" > Manage Food Items </Link> */}

                                    {user?.email ?
                                        <Link  to='/home' className="ml-auto inline-flex  font-bold text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-md" > <span><img className='w-4 bg-white mr-2 my-1 rounded-md' src="https://i.ibb.co/w7HtJyq/google.png" alt="" /></span> Log Out </Link> :
                                        <Link to='/login' className="ml-auto inline-flex  font-bold text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-lg" ><span><img className='w-6 bg-white mr-2 my-1 rounded-md' src="https://i.ibb.co/w7HtJyq/google.png" alt="" /></span> Sign In </Link>}
                                    <button className="font-bold text-sm sm:text-lg text-indigo-700   pe-3 ml-3 ">  <a href="/login">{user?.displayName}</a>
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
