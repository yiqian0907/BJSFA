import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginUser: sessionStorage.getItem("Login-user")
      ? JSON.parse(sessionStorage.getItem("Login-user"))
      : null,
    productsInCart: localStorage.getItem("productsInCart")
      ? JSON.parse(localStorage.getItem("productsInCart"))
      : [],
    currentStoreName: sessionStorage.getItem("store-name")
      ? sessionStorage.getItem("store-name")
      : null
  },
  mutations: {
    setLoginUser(state, payload) {
      state.loginUser = payload;
    },
    addToCart(state, payload) {
      for (let i = 0; i < state.productsInCart.length; i++) {
        for (let j = 0; j < state.productsInCart[i].length; j++) {
          if (
            state.productsInCart[i][j].warehouse_id === payload.warehouse_id
          ) {
            if (state.productsInCart[i][j].code === payload.code) {
              state.productsInCart[i][j].quantity =
                parseInt(state.productsInCart[i][j].quantity) +
                parseInt(payload.quantity);
              localStorage.setItem(
                "productsInCart",
                JSON.stringify(state.productsInCart)
              );
              return;
            }
            state.productsInCart[i].unshift(payload);
            localStorage.setItem(
              "productsInCart",
              JSON.stringify(state.productsInCart)
            );
            return;
          }
        }
      }
      state.productsInCart.unshift([payload]);
      localStorage.setItem(
        "productsInCart",
        JSON.stringify(state.productsInCart)
      );
    },
    changeCurrentStoreName(state, newName) {
      state.currentStoreName = newName;
      sessionStorage.setItem("store-name", state.currentStoreName);
    },
    clearCartBeforeChangeStore(state) {
      state.productsInCart = [];
      localStorage.removeItem("productsInCart");
    },
    changeQuantity(state, payload) {
      state.productsInCart = payload;
      localStorage.setItem(
        "productsInCart",
        JSON.stringify(state.productsInCart)
      );
    }
  }
});
