import React from 'react'
import { useState } from 'react';

const Counter = () =>{
    const [counter, setCounter] = useState(0)

    const inc = () =>{
        setCounter(counter + 1)
    }
    
      const dec = () =>{
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
        </div>
    )
}

export default Counter;
