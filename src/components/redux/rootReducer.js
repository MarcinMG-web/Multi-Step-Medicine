import { combineReducers } from 'redux';

import answerReducer from './answers/answerReducer';

const rootReducer = combineReducers({
  answerReducer: answerReducer,
});

export default rootReducer;
