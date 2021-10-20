import { useState, useEffect } from 'react';
import { getAuth,sendEmailVerification, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
  
    const auth = getAuth();
  
    const handleGoogleSignIn = () => {
      setLoading(true)
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider)
        .then(result => {
          const user = result.user;
          setUser(user);
        })
        .finally(() => setLoading(false))
    }
  
    const toggleLogin = e => {
      setIsLogin(e.target.checked)
    }
  
    const handleNameChange = e => {
      setName(e.target.value);
    }
    const handleEmailChange = e => {
      setEmail(e.target.value);
    }
  
    const handlePasswordChange = e => {
      setPassword(e.target.value)
    }
  
    const handleRegistration = e => {
      e.preventDefault();
      console.log(email, password);
      if (password.length < 6) {
        setError('Password Must be at least 6 characters long.')
        return;
      }
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        setError('Password Must contain 2 upper case');
        return;
      }
  
      if (isLogin) {
        processLogin(email, password);
      }
      else {
        registerNewUser(email, password);
      }
  
    }
  
    const processLogin = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
        })
        .catch(error => {
          setError(error.message);
        })
    }
  
    const registerNewUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
          verifyEmail();
         
        })
        .catch(error => {
          setError(error.message);
        })
    }
  
    
    const verifyEmail = () => {
      sendEmailVerification(auth.currentUser)
        .then(result => {
          console.log(result);
        })
    }
  
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }
    // observe whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else{
              setUser({})
            }
            setLoading(false)
        })
    }, []);

    return {
      user,  handleRegistration,loading,logOut,handleGoogleSignIn,handleEmailChange,handlePasswordChange,toggleLogin,error,isLogin,
    }
}

export default useFirebase;