import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Therapy = () => {

const [questions, setQuestions] = useState([]);

  return (
    <div>
      Therapy
      <div className='container'>
        {/* Therapy*/}
        <div>What therapy or consultation <br /> are you looking for?</div>
        <div className='container_question'>

        </div>
        <div className='container_buttons'>
          <Link type='submit' className='btn_back' to='./'>
            Back
          </Link>
          <Link type='submit' className='btn_next' to='./therapy'>
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Therapy;
