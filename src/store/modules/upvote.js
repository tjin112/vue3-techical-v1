export default {
  namespaced: true,
  state: {
    upvote: {
      state: false,
    },
  },
  mutations: {
    updateUpvote(state) {
      state.upvote.state = !state.upvote.state;
    },
  },
  actions: {},
  getters: {
    getState(state) {
      return state.upvote;
    },
  },
};
