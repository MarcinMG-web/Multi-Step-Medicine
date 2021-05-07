import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    therapy: '',
    gender: '',
    old: '',
    issues: '',
    language: '',
  },
  reducers: {
    chooseTherapy: (state, action) => {
      state.therapy = action.payload;
    },
    chooseGender: (state, action) => {
      state.gender = action.payload;
    },
    chooseOld: (state, action) => {
      state.old = action.payload;
    },
    chooseIssues: (state, action) => {
      state.issues = action.payload;
    },
    chooseLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const {
  chooseTherapy,
  chooseGender,
  chooseOld,
  chooseIssues,
  chooseLanguage,
} = rootSlice.actions;
