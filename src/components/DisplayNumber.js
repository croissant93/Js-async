import { useState } from 'react';
import store from '../store';

const DisplayNumber = () => {
  const [result, setResult] = useState(0);

  store.subscribe(() => {
    setResult(store.getState().redNum);
  });

  return (
    <div className="Red">
      <h1>DisplayNumber</h1>
      <input type="text" value={result} readonly />
    </div>
  );
};

export default DisplayNumber;
