import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

const Succes = () => {

  const therapy = useSelector((state) => state.answerReducer.therapy);
  const gender = useSelector((state) => state.answerReducer.gender);
  const old = useSelector((state) => state.answerReducer.old)

  return (
    <div>
      <p>therapy:{therapy}</p>
      <p>gender:{gender}</p>
      <p>gender:{old}</p>

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
