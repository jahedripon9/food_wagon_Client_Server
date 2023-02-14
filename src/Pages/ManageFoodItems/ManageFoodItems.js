import React, { useEffect, useState } from 'react';

const ManageFoodItems = () => {


    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/fooditems')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/fooditems/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = foods.filter(food => food._id !== id)
                    setFoods(remaining)
                }

            })
    }

    return (
        <div>
            <div class="container mx-auto bg-blue-50">
                <div class=" text-center mb-20 ">
                    <h1 class="lg:text-5xl sm:text-3xl text-5xl font-bold title-font mb-4 text-yellow-600">Manage Food Items</h1>

                    <div class="flex mt-6 justify-center">
                        <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
                    </div>
                </div>
                {
                    foods.map(food => <div className='py-2' key={food._id}>
                        <img className='mx-auto' src={food.img} alt="" />
                        <h3 className='text-2xl font-bold'>{food.name}</h3>
                        <h3 className='text-2xl font-bold'>${food.price}</h3>
                        <button className='font-bold px-5 py-2 bg-red-600 text-white rounded-full' onClick={() => handleDelete(food._id)}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageFoodItems;






