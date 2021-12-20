import React from 'react';
import { Container} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddReview = () => {
    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://mysterious-citadel-30102.herokuapp.com/addedreview',data)
         .then(res => {
             console.log(res);
        if(res.data){
            alert('Product added')
            reset()
        }
    })
    }
    return (
        <Container>
            <h2 className='mb-5'>Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Enter your name' />
                 <br /> <br />
                <input {...register("img" ,{required: true})} placeholder='Upload image url' /> 
                <br /> <br />
                <input type="number" {...register("price")} placeholder='Rate us' /> 
                <br /> <br />
                <textarea {...register("description", { required: true, maxLength: 2000 })} placeholder='Give Review' /> <br /> <br />
                <input type="submit" />
            </form>
        </Container>
    );
};

export default AddReview;