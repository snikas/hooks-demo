import React, { useReducer, useEffect } from 'react';
import { ButtonContainer } from './styles';

function init(initialCount) {
    return initialCount;
}

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      case 'reset':
        return init(action.payload);
      default:
        throw new Error();
    }
  }

const Counter = ({ initialCount }) => {
    const [count, dispatch] = useReducer(reducer, initialCount, init);

    useEffect(() => {
        dispatch({ type: 'reset', payload: initialCount })
    }, [initialCount])

    return (
        <>
            Count: {count}
            <ButtonContainer>
                <button
                onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
                Reset
                </button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            </ButtonContainer>
        </>
        );
};

export default Counter;