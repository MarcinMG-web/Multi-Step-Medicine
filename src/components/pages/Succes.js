import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Succes = () => {
  const state = useSelector((state) => state);


  // const therapy = JSON.parse(state.therapy)
  // const therapy = Object.keys(state)[0];
  // const gender = Object.keys(state)[1];
  // const old = Object.keys(state)[2];
  // const issues = Object.keys(state)[3];
  // const language = Object.keys(state)[4];
  // const languageValue = Object.values(state);

  // console.log(therapy);
  // console.log(gender);
  // console.log(old);
  // console.log(issues);
  // console.log(language);
  // console.log(languageValue);

  // state jest jsconnem
  // console.log(typeof(state))

//   const lang = Object.values(state)[4]

// console.log(Object.values(state)[4])


const result = state
console.log(result)



return (
  <div>
      <pre>{JSON.stringify(state, null, 3)}</pre>

      <br />
      



      <br />
      <Link to='./language'>Back to start</Link>
    </div>
  );
};


export default Succes;
