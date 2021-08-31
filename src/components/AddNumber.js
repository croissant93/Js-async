import store from '../store';
import { useState } from 'react';

const AddNumberRoot = () => {
  const [size, setSize] = useState(0);

  return (
    <div>
      <h1>AddNumber</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          store.dispatch({ type: 'plus', size: size });
        }}
      />
      <input
        type="button"
        value="-"
        onClick={() => {
          store.dispatch({ type: 'minus', size: size });
        }}
      />
      <input
        type="text"
        value={size}
        onChange={e => {
          setSize(Number(e.target.value));
        }}
      />
    </div>
  );
};

export default AddNumberRoot;
