import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth()

    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch(`https://mysterious-citadel-30102.herokuapp.com/myorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [])

    const handleDelete = id => {
        const url = `https://mysterious-citadel-30102.herokuapp.com/myorders/${id}`
        const procced = window.confirm('are you sure??')
        if (procced) {
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {

                        alert('deleted')
                        const availableUser = order.filter(booking => booking._id !== id)
                        setOrder(availableUser)
                    }

                })
        }
    }
    return (
        <div>
            <h2>Your order {order.length}</h2>
                <Row>
                    <div className="col-md-12">
                    {
                    order.map(booking => <ul key={booking.name}> <li  className='d-flex justify-content-between m-3 w-25' >

                        {booking.product}
                        {booking ?
                            <button className='btn-info rounded' onClick={() => handleDelete(booking._id)}>delete</button>
                            : <p></p>}
                    </li> </ul>)
                }
                    </div>
                </Row>
        </div>
    );
};

export default MyOrder;