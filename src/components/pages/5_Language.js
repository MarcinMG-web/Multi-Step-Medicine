import React, { useState, useEffect } from 'react';
import { Link,} from 'react-router-dom';
import { getAllLanguage } from '../services/ApiService';

const Language = () => {

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


  };

  return (
    <div>
      <div className='containerLanguage'>
        <div className='containerLanguage_text'>
          Language of therapy
          <p className='containerLanguage_text-small'>
            Choose at least one languageor more if you need multi-lingual
            therapist
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
              <Link
                type='submit'
                to='/issue'
                className='btn_back'

              >
                Back
              </Link>
              <Link to='/succes' type='submit' className='btn_next'>
                Next
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Language;
