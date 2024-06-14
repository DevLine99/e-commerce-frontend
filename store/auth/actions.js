export default {
    login({ commit }) {
      // POST /auth/login , axios.post(url, payload).then()
      // if success then set response.data
      commit('setCurrentUser', response.data);
    }
  };
  