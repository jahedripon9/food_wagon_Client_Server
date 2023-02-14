import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ConfirmItem = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/fooditems/${itemId}`)
            .then(res => res.json())
            .then(date => setItem(date))
    }, [])
    return (
        <div>
            <h2>Details of: {item.name}</h2>
            <h2>This is Booking: {itemId}</h2>
        </div>
    );
};

export default ConfirmItem;