import axios from 'axios';

const API_ROOT = 'https://127.0.0.1:8000/';

export default class Api {
  get(url, ...data) {
    return axios.get(url, { headers: data.headers ? data.headers : null, params: data.params ? data.params : null});
  };

  post(url, data) {
    return axios.post(url, data ? data : null);
  };
}
