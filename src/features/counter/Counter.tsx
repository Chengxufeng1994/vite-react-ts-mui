import React from 'react';

import Button from '@mui/material/Button';

import useCounterStore from '@/stores/useCounterStore';

const Counter: React.FC = () => {
  const { count, increaseCount, result } = useCounterStore();

  console.log(result());

  return (
    <div>
      <p>Count: {count}</p>
      <Button variant='contained' onClick={increaseCount}>
        Increment
      </Button>
    </div>
  );
};

export default Counter;
