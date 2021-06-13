import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getAllGenders } from '../services/ApiService';

import { addAnswersGender } from '../redux/answers/answersActions';
import { useDispatch } from 'react-redux';

const Gender = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([]);
  const [userSetting, setUserSetting] = useState('');

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const dataQuestion = await getAllGenders();
    setQuestions(dataQuestion);
  };

  const handleChange = (e) => {
    setUserSetting(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addAnswersGender(userSetting));

    history.push('./old');
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
                    value={question.completed}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}
            <div className='container_buttons'>
              <Link type='submit' className='btn_back' to='./'>
                Back
              </Link>

              <button to='./old' type='submit' className='btn_next'>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Gender;
