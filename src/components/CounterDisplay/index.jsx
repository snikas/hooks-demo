import React, { useContext } from 'react';
import CounterContext from '../../context/counterContext';

const CounterDisplay = () => {
    const count = useContext(CounterContext);

    return (
        <span>Count: {count}</span>
    )
} 

export default CounterDisplay;