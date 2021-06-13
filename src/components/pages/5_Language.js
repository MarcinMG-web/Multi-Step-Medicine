import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getAllLanguage } from '../services/ApiService';

import { addAnswersLanguage } from '../redux/answers/answersActions';
import { useDispatch } from 'react-redux';

const Language = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([]);
  const [userSetting, setUserSetting] = useState('');

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const dataQuestion = await getAllLanguage();
    setQuestions(dataQuestion);
  };

  const handleChange = (e) => {
    setUserSetting([...userSetting, e.target.name]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addAnswersLanguage(userSetting));

    history.push('./success');
  };

  return (
    <div>
      <div className='containerLanguage'>
        <div className='containerLanguage_text'>
          Language of therapy
          <p className='containerLanguage_text-small'>
            Choose at least one language more if you need multi-lingual therapist
          </p>
        </div>
        <div className='containerLanguage_main'>
          <form onSubmit={handleSubmit}>
            {questions.map((question) => (
              <div className='containerLanguage_question' key={question.id}>
                <div className='containerLanguage_question-label'>
                  <label>{question.type}</label>
                </div>

                <div className='containerLanguage_question-input'>
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
            <div className='containerLanguage_buttons'>
              <Link type='submit' to='/issue' className='btn_back'>
                Back
              </Link>
              <button to='/success' type='submit' className='btn_next'>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Language;
