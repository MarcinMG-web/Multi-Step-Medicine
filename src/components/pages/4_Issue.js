import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getAllIssue } from '../services/ApiService';


const Issue = () => {


  const [questions, setQuestions] = useState([]);
  const [userSetting, setUserSetting] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const dataQuestion = await getAllIssue();
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
      <div className='containerIssue'>
        <div className='containerIssue_text'>
          What best describeswhat you are struggling with?
          <p className='containerIssue_text-small'>
            Choose at last one option.
          </p>
        </div>
        <div className='containerIssue_main'>
          <form onSubmit={handleSubmit} className='containerIssue_form'>
            {questions.map((question) => (
              <div className='containerIssue_question' key={question.id}>
                <div className='containerIssue_question-label'>
                  <label>{question.type}</label>
                </div>

                <div className='containerIssue_question-input'>
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
            <div className='containerIssue_buttons'>
              <Link type='submit' className='btn_back' to='./old'>
                Back
              </Link>
              <Link to='./language' type='submit' className='btn_next'>
                Next
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Issue;