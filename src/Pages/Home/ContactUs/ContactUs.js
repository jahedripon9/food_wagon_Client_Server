import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className='text-6xl font-bold mt-16'>GET IN TOUCH</h1>
                <p className='text-center text-3xl mx-20 mt-10'>If you have been to one of our restaurants recently and are looking for the link to complete a feedback survey. simply grab your receipt and you can find our survey here.</p>

            </div> <hr className='my-14' />
            <h1 className='text-6xl font-bold my-16'>ENQUIRY TYPE</h1>
            <div className="relative my-5">
                <select className="w-6/12 text-2xl text-center border-separate border border-green-800">
                    <option>I want to tell you about a recent visit/ del experience</option>
                    <option>I have a equation for you</option>
                    <hr />
                </select>
                <div className="pointer-events-none py-5">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                </div>
                <button className='bg-red-600 px-20 py-2 rounded-full text-white font-bold text-3xl'>Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;