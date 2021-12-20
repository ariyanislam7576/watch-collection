import React, { useEffect, useState } from 'react';
import useFirebase from '../../../Hooks/useFirebase';

const MyOrder = () => {
    const { user } = useFirebase({})

    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch(`https://immense-crag-91398.herokuapp.com/myorder?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [])

    // const handleDelete = id => {
    //     const url = `https://immense-crag-91398.herokuapp.com/myorder/${id}`
    //     const procced = window.confirm('are you sure??')
    //     if (procced) {
    //         fetch(url, {
    //             method: "DELETE"
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);

    //                 if (data.deletedCount > 0) {

    //                     alert('deleted')
    //                     const availableUser = order.filter(booking => booking._id !== id)
    //                     setOrder(availableUser)
    //                 }

    //             })
    //     }
    // }
    return (
        <div>
            <h3>This is my order</h3>
        </div>
    );
};

export default MyOrder;