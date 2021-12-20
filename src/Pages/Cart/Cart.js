import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';

const Cart = () => {
    const { productId } = useParams()
    const { user } = useAuth()
    const [products, setProducts] = useState([])
    const { register, handleSubmit, reset, } = useForm();
    useEffect(() => {
        fetch(`http://localhost:4500/addedproduct/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])
    const onSubmit = data => {
        axios.post('http://localhost:4500/myorders', data)
            .then(res => {
                if (res.data) {
                    alert('Order placed')
                    reset()
                }
            })
    }
    return (
        <Container>
            <Row className='my-5'>
                <div className="col-md-4">
                    <Col>
                        <Card>
                            <img src={products.img} alt="" />
                            <Card.Body className="text-start">
                                <Card.Title>{products.name}</Card.Title>
                                <h3>${products.price}</h3>
                                <Card.Text>
                                    {products.description?.slice(0, 200)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <div className="col-md-4">
                    <h3>fill the form</h3>
                    <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 60 })} placeholder='name' />
                        <br /> <br />
                        <input type="email" defaultValue={user?.email} {...register("email", { required: true })} placeholder='email' />
                        <br /> <br />
                        <input defaultValue={products.name} {...register("product", { required: true })} placeholder='Product name' />
                        <br /> <br />
                        <input  {...register("address", { required: true, maxLength: 40 })} placeholder='address' />
                        <br /> <br />
                        <input type="number" {...register("phone")} placeholder='Phone' />
                        <br /> <br />
                        <textarea {...register("description", { required: false, maxLength: 2000 })} placeholder='description' /> <br /> <br />
                        <input type="submit" value="procced to booking" />
                    </form>
                </div>
            </Row>
        </Container>
    );
};

export default Cart;