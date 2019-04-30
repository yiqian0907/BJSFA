import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginUser: sessionStorage.getItem("Login-user")
      ? JSON.parse(sessionStorage.getItem("Login-user"))
      : null
  },
  mutations: {
    setLoginUser(state, payload) {
      state.loginUser = payload;
    }
  },
  actions: {}
});
