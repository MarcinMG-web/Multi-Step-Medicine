import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Success = () => {
  const therapy = useSelector((state) => state.answerReducer.therapy);
  const gender = useSelector((state) => state.answerReducer.gender);
  const old = useSelector((state) => state.answerReducer.old);
  const issue = useSelector((state) => state.answerReducer.issue);
  const language = useSelector((state) => state.answerReducer.language);

  return (
    <div className='containerSuccess'>
      <div className='containerSuccess-header'>
        <h1>Summary:</h1>
      </div>
      <div className='containerSuccess-results'>
        <div className='containerSuccess-results-single'>
          <p>therapy: {therapy}</p>
          <Link to='/' className='btn_changed'>
            Change issues
          </Link>
        </div>

        <div className='containerSuccess-results-single'>
          <p>gender: {gender}</p>
          <Link to='/gender' className='btn_changed'>
            Change gender
          </Link>
        </div>

        <div className='containerSuccess-results-single'>
          <p>old: {old}</p>
          <Link to='/old' className='btn_changed'>
            Change old
          </Link>
        </div>

        <div className='containerSuccess-results-single'>
          <p>issue: {issue}</p>
          <Link to='/issue' className='btn_changed'>
            Change issue
          </Link>
        </div>

        <div className='containerSuccess-results-single'>
          <p>language: {language}</p>
          <Link to='/language' className='btn_changed'>
            Change language
          </Link>
        </div>
      </div>

      <div className='containerSuccess-buttons'>
        <Link to='/' className='btn_startSearchAgain'>
          Start search again
        </Link>
      </div>
    </div>
  );
};

export default Success;
