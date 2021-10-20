

import './Login.css'
import initializeAuthentication from '../../Firebase/firebase.init';
import useFirebase from '../../hooks/useFirebase';

initializeAuthentication()

const Login = () => {
    const {handleRegistration,handleGoogleSignIn,logOut,handleEmailChange,handlePasswordChange,toggleLogin,error,isLogin}=useFirebase();
  
    return  (
        
        <div className='log-in-bg'>
            <h3  className='text-light py-5'>Please Log In</h3>
             <div className="row">

                 <div className='col-md-3'></div>
                 <div className='col-md-6'>
                 <div className="login-form">
            <div>
                <h2 className='py-3'>Login</h2>
                <form onSubmit={handleRegistration}>
        <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
        {!isLogin && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text"  className="form-control" id="inputName" placeholder="Your Name" />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? 'Login' : 'Register'}
        </button>
        <button  type="button" onClick={logOut} className="btn m-4 btn-secondary btn-sm">Log out</button>

      </form>
      <button className=' btn btn-info my-4' onClick={handleGoogleSignIn}>Google Sign In</button>
                
               
               
            </div>
        </div>
                 </div>
                 <div className='col-md-3'></div>
             </div>


        </div>
     
    );
};

export default Login;