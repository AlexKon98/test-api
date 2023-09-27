import axios from 'axios';

export const state = () => ({
  token: ''
});

export const getters = {
  getToken: s => s.token,
};

export const mutations = {
  setToken(state, token) {
    state.token = token;
  }
};

export const actions = {
  async fetchToken(ctx, user) {
    return await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/api-token-auth/',
      data: {
        ...user
      }
    });
  },
  async fetchNomen(ctx, token) {
    return await axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/v1/nomenclatures/',
      headers: {
        Authorization: token
      },
    });
  }
};
