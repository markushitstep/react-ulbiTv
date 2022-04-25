import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext);
    
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth');
    }
    return (
        <div className='navbar'>
            <MyButton onClick={logout}>Exit</MyButton>
            <div className='navbar__links'>
                <NavLink  to={'/about'}>About</NavLink>
                <NavLink  to={'/posts'}>New</NavLink>
                {/* <NavLink  to={'/posts/new'}>New</NavLink> */}
            </div>
      </div>
    )
}

export default Navbar;