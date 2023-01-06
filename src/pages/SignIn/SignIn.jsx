import React, { useState, useEffect } from 'react';
import style from './SignIn.module.css';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, login, user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSignUp = (e) => {
    signup(email, password);
  };

  const handleLogin = (e) => {
    login(email, password);
  };

  return (
    <div className={style.container}>
      <div className={style.box}>
        <h1>Chhop Now !</h1>
        <div className={style.field}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={style.buttons}>
          <button onClick={handleLogin}>Sign In</button>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
