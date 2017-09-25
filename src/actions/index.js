import axios from 'axios';

export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
export const CREATE_USER ='CREATE_USER';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIPFFF";

export function switchLanguage(language) {
    return {
        type: SWITCH_LANGUAGE,
        language
    }
}

export function createUser(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_USER,
    payload: request
  };
}
