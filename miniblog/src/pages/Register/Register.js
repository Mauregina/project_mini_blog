import { useState } from 'react';

import styles from './Register.module.css';

import {useAuthentication} from '../../hooks/useAuthentication';

const Register = () => {
  const [name, setName] = useState();  
  const [email, setEmail] = useState();  
  const [password, setPassword] = useState();  
  const [confirmPassword, setConfirmPassword] = useState();  
  const [error, setError] = useState();

  const { createUser, error: authError, loading } = useAuthentication();

  console.log(createUser);
  console.log(authError);
  console.log(loading);

  const handleSubmit = (e) => {
      e.preventDefault();
      setError("");
      
      if (password != confirmPassword) {
        setError('The Confirm Password confirmation does not match'); 
        return;
      }

      const user = {
          name,
          email,
          password 
      }

      console.log(user);
  }  

  return (
    <div className={styles.register}>
        <h1>Register to post</h1>
        <p>Register and share your adventures</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Name</span>
                <input type="text" name='name' placeholder='Type your name' required onChange={(e) => setName(e.target.value)}/>
            </label>    
            <label>
                <span>Email</span>
                <input type="text" name='email' placeholder='Type your email' required onChange={(e) => setEmail(e.target.value)}/>
            </label>   
            <label>
                <span>Password</span>
                <input type="text" name='password' placeholder='Type your password' required onChange={(e) => setPassword(e.target.value)}/>
            </label>   
            <label>
                <span>Confirm Password</span>
                <input type="text" name='confirmPassword' placeholder='Type your password again' required onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>   
            <button className='btn'>Register</button>
            {error &&
                <p className='error'>{error}</p>
            }
        </form>
    </div>
  )
}

export default Register;