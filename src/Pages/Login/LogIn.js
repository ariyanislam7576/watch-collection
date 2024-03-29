import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink, useLocation , useNavigate} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {

    const {signInWithGoogle} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const handleSubmit = e =>{
        e.preventDefault()
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle(location,navigate)
    }
    return (
        <Container>
            <Row>
                <div className="col-md-6">
                <img className='w-100' src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg" alt="" />
                </div>
                <div className="col-md-6 my-5">
                    <h2>Log in</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="" id="" placeholder='Enter your email' />
                        <br /><br />
                        <input type="password" name="" id="" placeholder='Enter your password' />
                        <br /><br />
                        <input type="submit" value="Login" />
                    </form>
                    <p>New user? <NavLink to='/register'>Register</NavLink> </p>
                    <button onClick={handleGoogleSignIn} className="btn-secondary">
                       Signin with Google
                    </button>
                </div>
                
            </Row>
        </Container>
    );
};

export default LogIn;