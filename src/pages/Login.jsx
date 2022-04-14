import React from 'react'
import { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () =>{
    const {setIsAuth} = useContext(AuthContext);
    
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <div>
           <h1>Страница для логина</h1>
           <form onSubmit={login}>
                <MyInput type="text" placeholder='введите логин'/>
                <MyInput type="password" placeholder='введите пороль'/>
                <MyButton>Войти</MyButton>
           </form>
        </div>
    )
}

export default Login;
