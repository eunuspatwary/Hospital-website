import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='log-in-bg'>
            <h3  className='text-light py-5'>Please Log In</h3>
             <div className="row">

                 <div className='col-md-3'></div>
                 <div className='col-md-6'>
                 <div className="login-form">
            <div>
                <h2 className='py-3'>Login</h2>
                <form>
                    
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your Email" />
                    <br />
                    <input type="password" class="form-control" id="exampleInputPassword1"  placeholder="Your Password"/>
                    <br />
                    <button className='btn my-4'>Log In</button>
                </form>
                <p> Already Register ? Plese <Link to='/login'>Log In</Link> </p>
               
               
            </div>
        </div>
                 </div>
                 <div className='col-md-3'></div>
             </div>


        </div>
        </div>
    );
};

export default Register;