import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

const Succes = () => {

  const therapy = useSelector((state) => state.answerReducer.therapy);

  return (
    <div>
      <p>therapy:{therapy}</p>

      <Link to='/' className='btn_back'>
        Start
      </Link>

      <Link to='/language' className='btn_back'>
        Back
      </Link>
    </div>
  );
};



export default Succes;
