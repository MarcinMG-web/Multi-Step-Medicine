import { ADD_ANSWERS_THERAPY } from './asnwersTypes';
import { ADD_ANSWERS_GENDER } from './asnwersTypes';
import { ADD_ANSWERS_OLD } from './asnwersTypes';
import { ADD_ANSWERS_ISSUE } from './asnwersTypes';
import { ADD_ANSWERS_LANGUAGE } from './asnwersTypes';

// ACTIONS creators - object
export const addAnswersTherapy = (answer) => {
  return {
    type: ADD_ANSWERS_THERAPY,
    payload: answer,
  };
};
export const addAnswersGender = (answer) => {
  return {
    type: ADD_ANSWERS_GENDER,
    payload: answer,
  };
};
export const addAnswersOld = (answer) => {
  return {
    type: ADD_ANSWERS_OLD,
    payload: answer,
  };
};
export const addAnswersIssue = (answer) => {
  return {
    type: ADD_ANSWERS_ISSUE,
    payload: answer,
  };
};
export const addAnswersLanguage = (answer) => {
  return {
    type: ADD_ANSWERS_LANGUAGE,
    payload: answer,
  };
};
