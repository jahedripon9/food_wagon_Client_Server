import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AdFoodItems.css'


const Servicead = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/fooditems', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Food Items Ad')
                    reset();
                }
            })
    };
    return (
        <div className='add-food bg-yellow-100 '>
            <img className='w-56 rounded-full mx-auto' src="https://i.ibb.co/tq0vtxR/image.png" alt="" />
            <div className='pb-16 text-red-500 '>
                <h2 className='font-bold text-5xl my-5 underline'>Please Add Food Items</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='text-2xl  text-center mb-28'>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' className='text-left ' />
                    <input {...register("description")} placeholder='Description' className='text-left ' />
                    <input type="number" {...register("price")} placeholder='Price' className='text-left ' />
                    <input {...register("img")} placeholder='Img Url' className='text-left ' />
                    <input type="submit" className='bg-green-400 rounded-xl hover:bg-green-600 text-white ' />
                </form>
            </div>
        </div>
    );
};

export default Servicead;