import {
  ADD_ANSWERS_THERAPY,
  ADD_ANSWERS_GENDER,
  ADD_ANSWERS_OLD,
  ADD_ANSWERS_ISSUE,
  ADD_ANSWERS_LANGUAGE,
} from './asnwersTypes';

const intialState = {
  therapy: '',
  gender: '',
  old: '',
  issue: '',
  language: '',
};


// Reducer
const answerReducer = (state = intialState, action) => {
    switch (action.type) {
      case ADD_ANSWERS_THERAPY:
        return {
          ...state,
          therapy: action.payload,
        };
      case ADD_ANSWERS_GENDER:
        return {
          ...state,
          gender: action.payload,
        };
      case ADD_ANSWERS_OLD:
        return {
          ...state,
          old: action.payload,
        };
      case ADD_ANSWERS_ISSUE:
        return {
          ...state,
          issue: action.payload,
        };
      case ADD_ANSWERS_LANGUAGE:
        return {
          ...state,
          language: action.payload,
        };
      default:
        return state;
    }      
}

export default answerReducer