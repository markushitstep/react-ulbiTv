import React from 'react'
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../context';
import { privateRoutes, publicRoutes } from '../../router'
import MyLoader from '../UI/loader/MyLoader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <MyLoader />
    }
    return (
        isAuth
            ?   <Routes>
                    {privateRoutes.map((route) => 
                        <Route 
                            path={route.path} 
                            element={route.component} 
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                </Routes>
            :   <Routes>
                    {publicRoutes.map((route) => 
                        <Route 
                            path={route.path} 
                            element={route.component} 
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                </Routes>
        
    )
}

export default AppRouter; 
