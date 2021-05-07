import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAllTherapyQuestions } from '../services/ApiService';

const Therapy = () => {
  let history = useHistory();

  const [questions, setQuestions] = useState([]);

  const [userSetting, setUserSetting] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    const dataQuestion = await getAllTherapyQuestions();
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
    history.push('./gender');
    console.log(userSetting);
  };

  return (
    <div>
      Therapy
      <div className='container'>
        {/* Therapy*/}

        <div>
          What therapy or consultation <br /> are you looking for?
        </div>

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
