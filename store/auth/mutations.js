export default {
    setCurrentUser(state, payload) {
      state.currentUser = payload;
      state.isAuthenticated = true;
    }
  };
  