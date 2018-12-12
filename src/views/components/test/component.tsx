import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Test({name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) {
  return (
    <React.Fragment>
      <h1>Name is: {name}</h1>
      <h3>Enthusiasm: {enthusiasmLevel}</h3>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </React.Fragment>
  );
}

export default Test;
