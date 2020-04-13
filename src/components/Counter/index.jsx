import React, { useState } from 'react';
import { ButtonContainer } from './styles';

const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    return (
        <>
            Count: {count}
            <ButtonContainer>
                <button
                onClick={() => setCount(initialCount)}>
                Reset
                </button>
                <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
                <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
            </ButtonContainer>
        </>
        );
};

export default Counter;