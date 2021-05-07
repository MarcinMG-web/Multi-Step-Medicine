import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getAllLanguage } from '../services/ApiService';

const Language = () => {
  let history = useHistory();

  const [questions, setQuestions] = useState([]);
  const [userSetting, setUserSetting] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const dataQuestion = await getAllLanguage();
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
    history.push('./listofTherapist');
    console.log(userSetting);
  };

  return (
    <div>
      Language
      <div className='containerLanguage'>
        <div>Language of therapy</div>
        <p className='containerLanguage_text'>
          Choose at least one languageor more if you need multi-lingual
          therapist
        </p>
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
              <Link type='submit' className='btn_back' to='./issue'>
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

export default Language;
