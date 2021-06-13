import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getAllTherapyQuestions } from '../services/ApiService';

import { addAnswersTherapy } from '../redux/answers/answersActions';
import { useDispatch } from 'react-redux';

const Therapy = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([]);
  const [userSetting, setUserSetting] = useState('');

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const dataQuestion = await getAllTherapyQuestions();
    setQuestions(dataQuestion);
  };

  const handleChange = (e) => {
    setUserSetting(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addAnswersTherapy(userSetting));

    history.push('./gender');
  };

  return (
    <div>
      <div className='container'>
        <div>
          What therapy or consultation <br /> are you looking for?
        </div>

        <div className='container_main'>
          <form onSubmit={handleSubmit}>
            {questions.map((question) => (
              <div className='container_question' key={question.id}>
                <div className='container_question-label'>
                  <label htmlFor='therapy'>{question.type}</label>
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
              <Link type='submit' className='btn_back' to='/'>
                Back
              </Link>

              <button type='submit' className='btn_next'>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Therapy;
