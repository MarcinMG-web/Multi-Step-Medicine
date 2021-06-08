import {ADD_ANSWERS_THERAPY} from './asnwersTypes';
const { ADD_ANSWERS_GENDER } = require('./asnwersTypes');
const { ADD_ANSWERS_OLD } = require('./asnwersTypes');
const { ADD_ANSWERS_ISSUE } = require('./asnwersTypes');
const { ADD_ANSWERS_LANGUAGE } = require('./asnwersTypes');

const intialState = {
  therapy: '',
  gender: '',
  old: '',
  issue: '',
  language: '',
};


// Reducer
const answerReducer = (state = intialState, action) => {
    switch(action.type) {
        case ADD_ANSWERS_THERAPY:
            return {
                ...state,
                therapy: action.payload,
            }
        default: return state
    }      
}

export default answerReducer