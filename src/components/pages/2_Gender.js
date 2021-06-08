import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';

import { getAllGenders } from '../services/ApiService';

const Gender = () => {

  const [questions, setQuestions] = useState([]);
  const [userSetting, setUserSetting] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const dataQuestion = await getAllGenders();
    setQuestions(dataQuestion);
  };

  const handleChange = (e) => {
    setUserSetting({
      ...userSetting,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
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
            <div className='container_buttons'>
              <Link type='submit' className='btn_back' to='./'>
                Back
              </Link>

              <Link  to = './old' type='submit' className='btn_next'>
                Next
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Gender;
