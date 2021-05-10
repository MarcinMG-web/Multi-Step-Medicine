import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Succes = () => {
  const state = useSelector((state) => state);

  const result = state;
  console.log(result);

  return (
    <div>
      <pre>{JSON.stringify(state, null, 3)}</pre>

      <Link  className='btn_back' to='./'>Start</Link>
    </div>
  );
};

export default Succes;
