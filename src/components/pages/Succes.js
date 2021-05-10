import React from 'react';
import { useSelector } from 'react-redux';

const Succes = () => {
  const state = useSelector((state) => state);

  return (
    <div>
      <pre>{JSON.stringify(state, null, 3)}</pre>
    </div>
  );
};

export default Succes;
