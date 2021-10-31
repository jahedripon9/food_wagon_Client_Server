import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Deliveryinfo.css'
const Deliveryinfo = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bg-yellow-100 py-2'>
            <div className=" container mx-auto "> 
            <h2 className="font-bold text-5xl my-5 underline"> <span className='text-decoration-underline'>Delivery Product</span>  Information</h2>
        

            <form className="ps-auto ms-auto text-2xl  text-center mb-28" onSubmit={handleSubmit(onSubmit)}>
                
                <input className="w-50 text-center rounded-pill" placeholder="Name" {...register("example")} required/>
                <br /> <br />
                
                <input className="w-50 text-center rounded-pill" placeholder="Address" defaultValue="" {...register("address")} required/> <br /> <br />
                
                <input className="w-50 text-center rounded-pill" placeholder="City" defaultValue="" {...register("city")} required /> <br /> <br />
                
                <input className="w-50 text-center rounded-pill" placeholder="Mobile" defaultValue="" {...register("mobile")} required /> <br /> <br />
                
                {errors.exampleRequired && <span className="text-danger fw-bold text-center rounded-pill">This field is required</span>}
                
                
                <Link to='/login'><input className="px-4 py-1 bg-yellow-300 rounded-full"  type="submit" /></Link>
            </form>
            </div>
        </div>
    );
};

export default Deliveryinfo;