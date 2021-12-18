import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
        const {signInUsingGoogle} = useFirebase({})
        const handleSubmit = e =>{
            e.preventDefault()
        }
    return (
        <Container>
            <Row>
                <div className="col-md-6">
                <img className='w-100' src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg" alt="" />
                </div>
                <div className="col-md-6 my-5">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter your name' />
                        <br /> <br />
                        <input type="email" name="" id="" placeholder='Enter your email' />
                        <br /><br />
                        <input type="password" name="" id="" placeholder='Enter your password' />
                        <br /><br />
                        <input type="submit" value="Login" />
                    </form>
                    <p>Alredy registered? <NavLink to='/login'>Login</NavLink> </p>
                    <button onClick={signInUsingGoogle} className="btn-secondary">
                       Signin with Google
                    </button>
                </div>
                
            </Row>
        </Container>
    );
};

export default Register;