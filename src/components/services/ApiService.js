import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3003/`,
});

export const getAllTherapyQuestions = async () => {
  try {
    return await api.get(`/therapy`).then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllGenders = async () => {
  try {
    return await api.get(`/gender`).then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllYears = async () => {
  try {
    return await api.get(`/old`).then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllIssue = async () => {
  try {
    return await api.get(`/issue`).then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllLanguage = async () => {
  try {
    return await api.get(`/language`).then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};
