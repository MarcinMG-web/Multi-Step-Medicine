import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Succes = () => {
  const state = useSelector((state) => state);

  return (
    <div>
      Succes
      {JSON.stringify(state, null, 2)}
      <Link to='./'>Back to start</Link>
    </div>
  );
};

export default Succes;
