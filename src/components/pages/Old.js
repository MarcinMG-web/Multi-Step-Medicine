import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getAllYears } from '../services/ApiService';

const Old = () => {
  const [questions, setQuestions] = useState([]);
  const [userSetting, setUserSetting] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const dataQuestion = await getAllYears();
    setQuestions(dataQuestion);
  };

  const handleChange = (e) => {
    setUserSetting({
      ...userSetting,
      [e.target.name]: e.target.checked,
    });
  };

  console.log(userSetting);

  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push('/gender');
  };

  return (
    <div>
      Old
      <div className='container'>
        <div>What is your gender?</div>

        <div className='container_main'>
          <form onSubmit={handleSubmit}>
            {questions.map((question) => (
              <div className='container_question' key={question.id}>
                <div className='container_question-label'>
                  <label>{question.type}</label>
                </div>

                <div className='container_question-input'>
                  <input
                    type='checkbox'
                    name={question.type}
                    value={question.checked}
                    checked={question.checked}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}
          </form>
          <p className='container_text'>If you are under 16 ask adult for help.</p>
        </div>


        <div className='container_buttons'>
          <Link type='submit' className='btn_back' to='./gender'>
            Back
          </Link>
          <Link type='submit' className='btn_next' to='./issue'>
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Old;
